import { WpPost } from './WpPost'

export interface WpResponse {
    found: number,
    posts: WpPost[]
}
