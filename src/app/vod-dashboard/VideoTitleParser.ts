export class VideoTitleParser {
  constructor(private videoTitle: string) {}

  get round() {
    const roundPrefix = 'Smash Ultimate ';
    const startRoundPosition =
      this.videoTitle.indexOf(roundPrefix) + roundPrefix.length;
    return this.videoTitle.substring(startRoundPosition);
  }
}
