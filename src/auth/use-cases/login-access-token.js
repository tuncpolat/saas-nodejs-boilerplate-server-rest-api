export default function makeLoginAccessToken({ jwt }) {
    return function loginAccessToken(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: '7d' })
        return { accessToken, refreshToken }

    }
}