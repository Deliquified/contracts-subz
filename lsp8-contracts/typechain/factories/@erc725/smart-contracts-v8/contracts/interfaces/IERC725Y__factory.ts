/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC725Y,
  IERC725YInterface,
} from "../../../../../@erc725/smart-contracts-v8/contracts/interfaces/IERC725Y";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
    ],
    name: "getDataBatch",
    outputs: [
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    name: "setDataBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IERC725Y__factory {
  static readonly abi = _abi;
  static createInterface(): IERC725YInterface {
    return new Interface(_abi) as IERC725YInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IERC725Y {
    return new Contract(address, _abi, runner) as unknown as IERC725Y;
  }
}
