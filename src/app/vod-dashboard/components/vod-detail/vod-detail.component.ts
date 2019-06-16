import { Component, Input } from "@angular/core";
import { VideoItem } from "../../models/videoItem.interface";

@Component({
  selector: "vod-detail",
  templateUrl: "./vod-detail.component.html"
})
export class VodDetailComponent {
  @Input()
  detail: VideoItem;

  constructor() {}
}
