import { Component, OnInit } from "@angular/core";
import { VodDashboardService } from "../../vod-dashboard.service";
import { VideoItem } from "../../models/videoItem.interface";

@Component({
  selector: "vod-dashboard",
  templateUrl: "./vod-dashboard.component.html"
})
export class VodDashboardComponent implements OnInit {
  videos: VideoItem[];

  constructor(private vodService: VodDashboardService) {}

  ngOnInit(): void {
    this.vodService.getVideos().subscribe((videoList: VideoItem[]) => {
      console.log(videoList);
      this.videos = videoList;
    });
  }
}
