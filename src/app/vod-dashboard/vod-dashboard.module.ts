import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
//Containers
import { VodDashboardComponent } from "./containers/vod-dashboard/vod-dashboard.component";

//services
import { VodDashboardService } from "./vod-dashboard.service";

@NgModule({
  declarations: [VodDashboardComponent],
  imports: [HttpClientModule, MatButtonModule, MatCheckboxModule, CommonModule],
  exports: [VodDashboardComponent],
  providers: [VodDashboardService]
})
export class VodDashboardModule {}
