import { Theme } from "@mui/material";
import { ResponsiveStyleValue, SystemStyleObject } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import { Bet, Game, Modes } from "./types";

export type OddHistoryProps = {
  crash: number | string;
  countId?: string;
  date?: number;
};

export interface BetState {
  isDisabled?: boolean;
  bet: BetStateProp[];
  setBet: Dispatch<SetStateAction<BetStateProp[]>>;
}

export interface ModalCrashProps {
  radius?: number;
  width?: SystemStyleObject<Theme> | ResponsiveStyleValue<string | number>;
  height?: SystemStyleObject<Theme> | ResponsiveStyleValue<string | number>;
  variant?: 1 | 2;
  closeable?: boolean;
}

export interface BetPlacerProps {
  betAmount: number;
  setBetAmount: Dispatch<SetStateAction<number>>;
}

export interface OddPlacerProps {
  autoCashOut?: boolean;
  setAutoCashOut?: Dispatch<SetStateAction<boolean>>;
  odds?: number | string;
  setOdds?: Dispatch<SetStateAction<number | string>>;
  oddsRange?: number;
  setOddsRange?: Dispatch<SetStateAction<number>>;
  mode?: string;
}

export interface BetPlaceHandlerProps {
  handleBetPlace: (betMode?: Modes) => void;
}

export interface BetValuesProps {
  bets: Bet[];
}

export interface PointsHistoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  odds: any;
}

export interface BetStateProp {
  mode: Modes;
  overUnderMode?: Modes;
  betAmount: number;
  odds: number | string;
  oddsRange: number | string;
  playing?: boolean;
  oddsLookup?: number;
}

export interface OddSelectorComponentChildrenProps {
  game: Game;
  currBets?: any;
  handleOverUnder?: (e: any) => void;
}

export interface PlayerHistoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface PlayerHistory {
  hash: string;
  crashPoint: any;
  autoCashout: boolean;
  cashoutOdds: number;
  index: number;
  insurance: boolean;
  md5: string;
  mode: Modes;
  odds: number;
  oddsRange: number;
  betAmount: number;
  roundIndex: number;
  status: string;
  winAmount: number;

  placedAt: number;
}
export interface InformationModalProps {
  activePage: string;
  setActivePage: Dispatch<
    SetStateAction<
      | "howToPlay"
      | "info"
      | "Modes"
      | "Board"
      | "Actions"
      | "Tabs"
      | "Range"
      | "overUnder"
      | "classic"
    >
  >;
}
export interface Document {
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
}

export interface HTMLElement {
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullscreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
}
