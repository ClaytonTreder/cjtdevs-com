import FormData from 'form-data'
import InstagramUser from '../models/InstagramUser'

export default async function handler(req, res) {
    const accessTokenUrl = 'https://api.instagram.com/oauth/access_token'

    const data = new FormData()
    data.append('client_id', process.env.NEXT_PUBLIC_INSTA_SITE_ID)
    data.append('client_secret', process.env.INSTA_SECRET)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', process.env.NEXT_PUBLIC_INSTA_REDIRECT)
    data.append('code', req.query.code)

    const accessTokenRes = await fetch(accessTokenUrl, {
        method: 'POST',
        body: data,
    })
        .then((res) => res.text())
        .then((data) => ({
            access_token: JSON.parse(data).access_token,
            user_id: data
                .match(/.user_id":\s*([0-9]*)/)
                .toString()
                .match(/\d+/)
                .toString(),
        }))

    const userInfoUrl = `https://graph.instagram.com/${accessTokenRes.user_id}/?fields=id,username&access_token=${accessTokenRes.access_token}`
    const userInfoRes = await fetch(userInfoUrl)
        .then((res) => res.json())
        .then((data) => data)

    const user = await InstagramUser.findOne({
        user_id: accessTokenRes.user_id,
    })

    if (user) {
        user.access_token = accessTokenRes.access_token
        user.id = userInfoRes.id
        user.username = userInfoRes.username

        await InstagramUser.findByIdAndUpdate(
            user._id,
            { ...user },
            { useFindAndModify: false }
        )
    } else {
        await InstagramUser.create({
            access_token: accessTokenRes.access_token,
            user_id: accessTokenRes.user_id,
            id: userInfoRes.id,
            username: userInfoRes.username,
        })
    }

    res.redirect('/instagram/result')
}
