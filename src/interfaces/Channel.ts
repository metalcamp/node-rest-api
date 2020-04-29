export interface Channel {
    id: number,
    title: string,
}

export interface SubscribeToChannelRequest {
    subscriberURL: string,
}

export interface UnsubscribeFromChannelRequest {
    subscriberURL: string,
}
