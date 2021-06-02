import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WalletFollowerComponent } from './components/wallet-follower/wallet-follower.component';
import { WalletLeaderComponent } from './components/wallet-leader/wallet-leader.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe, WalletLeaderComponent, WalletFollowerComponent],
  imports: [CommonModule],
  exports: [WalletLeaderComponent, WalletFollowerComponent],
})
export class WalletModule {}
