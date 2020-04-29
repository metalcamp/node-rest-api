export interface Channel {
    id: int,
    title: string,
}

export interface SubscribeToChannelRequest {
    subscriberURL: string,
}

export interface UnsubscribeToChannelRequest {
    subscriberURL: string,
}
