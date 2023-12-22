export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
    window.SVGAnimatedAngle('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}