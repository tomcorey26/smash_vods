import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

//material
import { SharedMaterialModule } from "./material-ui/shared-material.module";
//Containers
import { VodDashboardComponent } from "./containers/vod-dashboard/vod-dashboard.component";

//services
import { VodDashboardService } from "./vod-dashboard.service";

@NgModule({
  declarations: [VodDashboardComponent],
  imports: [HttpClientModule, CommonModule, SharedMaterialModule],
  exports: [VodDashboardComponent],
  providers: [VodDashboardService]
})
export class VodDashboardModule {}
