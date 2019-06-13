import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { VideoItem } from "./models/videoItem.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators/";

//const VIDEOS_API = "assets/videos.json";

@Injectable()
export class VodDashboardService {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  //Videoitem[] not working
  getVideos(): Observable<any> {
    return this.http.get(this.url + "items");
  }
}
