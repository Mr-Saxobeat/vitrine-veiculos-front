import { Veiculo } from "./veiculo";

export interface PaginacaoVeiculo {
  count: number,
  next: string,
  previous: string,
  results: Veiculo[]
}
