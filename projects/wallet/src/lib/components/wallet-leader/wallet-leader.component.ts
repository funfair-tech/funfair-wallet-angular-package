import { Component, EventEmitter, NgZone, OnInit, Output } from "@angular/core";

@Component({
  selector: "lib-wallet-leader",
  templateUrl: "./wallet-leader.component.html",
  styleUrls: ["./wallet-leader.component.scss"],
})
export class WalletLeaderComponent implements OnInit {
  @Output() public loaded = new EventEmitter<void>();

  constructor(private _zone: NgZone) {}

  public ngOnInit(): void {
    if (!this.loaded) {
      throw new Error(
        "You must pass in the loaded output event to register your wallet listeners."
      );
    }
  }

  /**
   * Load the fun wallet
   */
  public funWalletLoaded(): void {
    // tslint:disable-next-line: no-any
    (window as any).funwallet.sdk.init({
      ngZone: this._zone,
    });

    this.loaded.emit();
  }
}
