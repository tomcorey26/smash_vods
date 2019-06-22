import { VideoTitleParser } from './VideoTitleParser';

const mockTitleString = `SNS5 SSBU - FOX MVG | Mkleo (Joker) Vs. eUnited | Samsora (Palutena) Smash Ultimate Grand Finals`;
let videoTitleParser: VideoTitleParser;
fdescribe('VideoTitleParser', () => {
  beforeEach(() => {
    videoTitleParser = new VideoTitleParser(mockTitleString);
  });

  describe('VideoTitleParser:round', () => {
    it('should return the round of the match', () => {
      const round = videoTitleParser.round;
      expect(round).toEqual('Grand Finals');
    });
  });

  describe('');
});
