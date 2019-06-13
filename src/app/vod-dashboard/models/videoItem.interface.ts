export interface VideoItem {
  snippet: Snippet;
  contentDetails: ContentDetails;
}

export interface Snippet {
  title: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  default: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}
