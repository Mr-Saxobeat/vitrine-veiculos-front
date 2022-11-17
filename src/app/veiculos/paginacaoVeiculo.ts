import { Veiculo } from "./veiculo";

export interface PaginacaoVeiculo {
  count: Number;
  next?: string;
  previous?: string;
  results: Veiculo[];
}
