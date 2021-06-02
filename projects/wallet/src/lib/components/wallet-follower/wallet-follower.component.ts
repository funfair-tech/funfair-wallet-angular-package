import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-wallet-follower",
  templateUrl: "./wallet-follower.component.html",
  styleUrls: ["./wallet-follower.component.scss"],
})
export class WalletFollowerComponent implements OnInit {
  public walletUrl = undefined;

  constructor() {}

  public ngOnInit(): void {
    // tslint:disable-next-line: no-any
    this.walletUrl = (window as any).funwallet.getWalletFollowerURL();
  }

  /**
   * Follower loaded
   */
  public async followerLoaded(): Promise<void> {
    // tslint:disable-next-line: no-any
    await (window as any).funwallet.sdk.registerFollowerInstance();
  }
}
