const add_to_Rinkeby = [
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_baseWeightCurrency",
              "type": "uint256"
          },
          {
              "internalType": "contract IJBOperatorStore",
              "name": "_operatorStore",
              "type": "address"
          },
          {
              "internalType": "contract IJBProjects",
              "name": "_projects",
              "type": "address"
          },
          {
              "internalType": "contract IJBDirectory",
              "name": "_directory",
              "type": "address"
          },
          {
              "internalType": "contract IJBSplitsStore",
              "name": "_splitsStore",
              "type": "address"
          },
          {
              "internalType": "contract IJBPrices",
              "name": "_prices",
              "type": "address"
          },
          {
              "internalType": "contract IJBSingleTokenPaymentTerminalStore",
              "name": "_store",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [],
      "name": "FEE_TOO_HIGH",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "INADEQUATE_DISTRIBUTION_AMOUNT",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "INADEQUATE_RECLAIM_AMOUNT",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "INADEQUATE_TOKEN_COUNT",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NO_MSG_VALUE_ALLOWED",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "PAY_TO_ZERO_ADDRESS",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "prod1",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "denominator",
              "type": "uint256"
          }
      ],
      "name": "PRBMath__MulDivOverflow",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "PROJECT_TERMINAL_MISMATCH",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "REDEEM_TO_ZERO_ADDRESS",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "TERMINAL_IN_SPLIT_ZERO_ADDRESS",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "TERMINAL_TOKENS_INCOMPATIBLE",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "refundedFees",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "memo",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "metadata",
              "type": "bytes"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "AddToBalance",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "contract IJBPayDelegate",
              "name": "delegate",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "payer",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "currentFundingCycleConfiguration",
                      "type": "uint256"
                  },
                  {
                      "components": [
                          {
                              "internalType": "address",
                              "name": "token",
                              "type": "address"
                          },
                          {
                              "internalType": "uint256",
                              "name": "value",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "decimals",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "currency",
                              "type": "uint256"
                          }
                      ],
                      "internalType": "struct JBTokenAmount",
                      "name": "amount",
                      "type": "tuple"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectTokenCount",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "beneficiary",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "preferClaimedTokens",
                      "type": "bool"
                  },
                  {
                      "internalType": "string",
                      "name": "memo",
                      "type": "string"
                  },
                  {
                      "internalType": "bytes",
                      "name": "metadata",
                      "type": "bytes"
                  }
              ],
              "indexed": false,
              "internalType": "struct JBDidPayData",
              "name": "data",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "DelegateDidPay",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "contract IJBRedemptionDelegate",
              "name": "delegate",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "holder",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "currentFundingCycleConfiguration",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectTokenCount",
                      "type": "uint256"
                  },
                  {
                      "components": [
                          {
                              "internalType": "address",
                              "name": "token",
                              "type": "address"
                          },
                          {
                              "internalType": "uint256",
                              "name": "value",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "decimals",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "currency",
                              "type": "uint256"
                          }
                      ],
                      "internalType": "struct JBTokenAmount",
                      "name": "reclaimedAmount",
                      "type": "tuple"
                  },
                  {
                      "internalType": "address payable",
                      "name": "beneficiary",
                      "type": "address"
                  },
                  {
                      "internalType": "string",
                      "name": "memo",
                      "type": "string"
                  },
                  {
                      "internalType": "bytes",
                      "name": "metadata",
                      "type": "bytes"
                  }
              ],
              "indexed": false,
              "internalType": "struct JBDidRedeemData",
              "name": "data",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "DelegateDidRedeem",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleConfiguration",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleNumber",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "distributedAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "beneficiaryDistributionAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "memo",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "DistributePayouts",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "domain",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "group",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "bool",
                      "name": "preferClaimed",
                      "type": "bool"
                  },
                  {
                      "internalType": "bool",
                      "name": "preferAddToBalance",
                      "type": "bool"
                  },
                  {
                      "internalType": "uint256",
                      "name": "percent",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address payable",
                      "name": "beneficiary",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "lockedUntil",
                      "type": "uint256"
                  },
                  {
                      "internalType": "contract IJBSplitAllocator",
                      "name": "allocator",
                      "type": "address"
                  }
              ],
              "indexed": false,
              "internalType": "struct JBSplit",
              "name": "split",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "DistributeToPayoutSplit",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeDiscount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "HoldFee",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "contract IJBPaymentTerminal",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "Migrate",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleConfiguration",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleNumber",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "payer",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "beneficiaryTokenCount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "memo",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "metadata",
              "type": "bytes"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "Pay",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "bool",
              "name": "wasHeld",
              "type": "bool"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "ProcessFee",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleConfiguration",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleNumber",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "holder",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenCount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "reclaimedAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "memo",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "metadata",
              "type": "bytes"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "RedeemTokens",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "refundedFees",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "leftoverAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "RefundHeldFees",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "SetFee",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "contract IJBFeeGauge",
              "name": "feeGauge",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "SetFeeGauge",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addrs",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "bool",
              "name": "flag",
              "type": "bool"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "SetFeelessAddress",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleConfiguration",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "fundingCycleNumber",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "distributedAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "netDistributedamount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "memo",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "UseAllowance",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          }
      ],
      "name": "acceptsToken",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "_memo",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "_metadata",
              "type": "bytes"
          }
      ],
      "name": "addToBalanceOf",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "baseWeightCurrency",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "currency",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          }
      ],
      "name": "currencyForToken",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          }
      ],
      "name": "currentEthOverflowOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          }
      ],
      "name": "decimalsForToken",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "directory",
      "outputs": [
          {
              "internalType": "contract IJBDirectory",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_currency",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_minReturnedTokens",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_memo",
              "type": "string"
          }
      ],
      "name": "distributePayoutsOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "netLeftoverDistributionAmount",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "fee",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "feeGauge",
      "outputs": [
          {
              "internalType": "contract IJBFeeGauge",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          }
      ],
      "name": "heldFeesOf",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint32",
                      "name": "fee",
                      "type": "uint32"
                  },
                  {
                      "internalType": "uint32",
                      "name": "feeDiscount",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "beneficiary",
                      "type": "address"
                  }
              ],
              "internalType": "struct JBFee[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "isFeelessAddress",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "contract IJBPaymentTerminal",
              "name": "_to",
              "type": "address"
          }
      ],
      "name": "migrate",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "operatorStore",
      "outputs": [
          {
              "internalType": "contract IJBOperatorStore",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_beneficiary",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_minReturnedTokens",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "_preferClaimedTokens",
              "type": "bool"
          },
          {
              "internalType": "string",
              "name": "_memo",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "_metadata",
              "type": "bytes"
          }
      ],
      "name": "pay",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "payoutSplitsGroup",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "prices",
      "outputs": [
          {
              "internalType": "contract IJBPrices",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          }
      ],
      "name": "processFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "projects",
      "outputs": [
          {
              "internalType": "contract IJBProjects",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_holder",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_tokenCount",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_minReturnedTokens",
              "type": "uint256"
          },
          {
              "internalType": "address payable",
              "name": "_beneficiary",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "_memo",
              "type": "string"
          },
          {
              "internalType": "bytes",
              "name": "_metadata",
              "type": "bytes"
          }
      ],
      "name": "redeemTokensOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "reclaimAmount",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
          }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "contract IJBFeeGauge",
              "name": "_feeGauge",
              "type": "address"
          }
      ],
      "name": "setFeeGauge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_address",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "_flag",
              "type": "bool"
          }
      ],
      "name": "setFeelessAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "splitsStore",
      "outputs": [
          {
              "internalType": "contract IJBSplitsStore",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "store",
      "outputs": [
          {
              "internalType": "contract IJBSingleTokenPaymentTerminalStore",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes4",
              "name": "_interfaceId",
              "type": "bytes4"
          }
      ],
      "name": "supportsInterface",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "token",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_currency",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "_minReturnedTokens",
              "type": "uint256"
          },
          {
              "internalType": "address payable",
              "name": "_beneficiary",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "_memo",
              "type": "string"
          }
      ],
      "name": "useAllowanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "netDistributedAmount",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

const ERC20ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];
const DAIABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const add_to_ETH =  [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_baseWeightCurrency",
                "type": "uint256"
            },
            {
                "internalType": "contract IJBOperatorStore",
                "name": "_operatorStore",
                "type": "address"
            },
            {
                "internalType": "contract IJBProjects",
                "name": "_projects",
                "type": "address"
            },
            {
                "internalType": "contract IJBDirectory",
                "name": "_directory",
                "type": "address"
            },
            {
                "internalType": "contract IJBSplitsStore",
                "name": "_splitsStore",
                "type": "address"
            },
            {
                "internalType": "contract IJBPrices",
                "name": "_prices",
                "type": "address"
            },
            {
                "internalType": "contract IJBSingleTokenPaymentTerminalStore",
                "name": "_store",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "FEE_TOO_HIGH",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INADEQUATE_DISTRIBUTION_AMOUNT",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INADEQUATE_RECLAIM_AMOUNT",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "INADEQUATE_TOKEN_COUNT",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NO_MSG_VALUE_ALLOWED",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PAY_TO_ZERO_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "prod1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
            }
        ],
        "name": "PRBMath__MulDivOverflow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PROJECT_TERMINAL_MISMATCH",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "REDEEM_TO_ZERO_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TERMINAL_IN_SPLIT_ZERO_ADDRESS",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TERMINAL_TOKENS_INCOMPATIBLE",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UNAUTHORIZED",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refundedFees",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "metadata",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "AddToBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IJBPayDelegate",
                "name": "delegate",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "payer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentFundingCycleConfiguration",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "decimals",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currency",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct JBTokenAmount",
                        "name": "amount",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "projectTokenCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "preferClaimedTokens",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "memo",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes",
                        "name": "metadata",
                        "type": "bytes"
                    }
                ],
                "indexed": false,
                "internalType": "struct JBDidPayData",
                "name": "data",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "DelegateDidPay",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IJBRedemptionDelegate",
                "name": "delegate",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentFundingCycleConfiguration",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "projectTokenCount",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "decimals",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currency",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct JBTokenAmount",
                        "name": "reclaimedAmount",
                        "type": "tuple"
                    },
                    {
                        "internalType": "address payable",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "memo",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes",
                        "name": "metadata",
                        "type": "bytes"
                    }
                ],
                "indexed": false,
                "internalType": "struct JBDidRedeemData",
                "name": "data",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "DelegateDidRedeem",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleConfiguration",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleNumber",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "distributedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "beneficiaryDistributionAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "DistributePayouts",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "domain",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "group",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "preferClaimed",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "preferAddToBalance",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "percent",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "beneficiary",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lockedUntil",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract IJBSplitAllocator",
                        "name": "allocator",
                        "type": "address"
                    }
                ],
                "indexed": false,
                "internalType": "struct JBSplit",
                "name": "split",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "DistributeToPayoutSplit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "feeDiscount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "HoldFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "contract IJBPaymentTerminal",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "Migrate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleConfiguration",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleNumber",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "payer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "beneficiaryTokenCount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "metadata",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "Pay",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "wasHeld",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "ProcessFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleConfiguration",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleNumber",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenCount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reclaimedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "metadata",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "RedeemTokens",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "refundedFees",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "leftoverAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "RefundHeldFees",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "SetFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IJBFeeGauge",
                "name": "feeGauge",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "SetFeeGauge",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "addrs",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "flag",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "SetFeelessAddress",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleConfiguration",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fundingCycleNumber",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "distributedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "netDistributedamount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "UseAllowance",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "acceptsToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_memo",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "_metadata",
                "type": "bytes"
            }
        ],
        "name": "addToBalanceOf",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseWeightCurrency",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "currency",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }
        ],
        "name": "currencyForToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "currentEthOverflowOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }
        ],
        "name": "decimalsForToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "directory",
        "outputs": [
            {
                "internalType": "contract IJBDirectory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_currency",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minReturnedTokens",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_memo",
                "type": "string"
            }
        ],
        "name": "distributePayoutsOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "netLeftoverDistributionAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeGauge",
        "outputs": [
            {
                "internalType": "contract IJBFeeGauge",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "heldFeesOf",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint32",
                        "name": "fee",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "feeDiscount",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "beneficiary",
                        "type": "address"
                    }
                ],
                "internalType": "struct JBFee[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isFeelessAddress",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "contract IJBPaymentTerminal",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "migrate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "operatorStore",
        "outputs": [
            {
                "internalType": "contract IJBOperatorStore",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_beneficiary",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minReturnedTokens",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_preferClaimedTokens",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "_memo",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "_metadata",
                "type": "bytes"
            }
        ],
        "name": "pay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "payoutSplitsGroup",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "prices",
        "outputs": [
            {
                "internalType": "contract IJBPrices",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "processFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projects",
        "outputs": [
            {
                "internalType": "contract IJBProjects",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenCount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minReturnedTokens",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_beneficiary",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_memo",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "_metadata",
                "type": "bytes"
            }
        ],
        "name": "redeemTokensOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "reclaimAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fee",
                "type": "uint256"
            }
        ],
        "name": "setFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IJBFeeGauge",
                "name": "_feeGauge",
                "type": "address"
            }
        ],
        "name": "setFeeGauge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setFeelessAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "splitsStore",
        "outputs": [
            {
                "internalType": "contract IJBSplitsStore",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "store",
        "outputs": [
            {
                "internalType": "contract IJBSingleTokenPaymentTerminalStore",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "_interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_currency",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_minReturnedTokens",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_beneficiary",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_memo",
                "type": "string"
            }
        ],
        "name": "useAllowanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "netDistributedAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Mainnet DAI, Optimism and Arbitrium Rollup Contracts with local addresses
module.exports = {
  1: {
    contracts: {
      DAI: {
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        abi: DAIABI,
      },
      UNI: {
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        abi: ERC20ABI,
      },
      ETH: {
      address: "0x7Ae63FBa045Fec7CaE1a75cF7Aa14183483b8397",
      abi: add_to_ETH,
    },
  },
  4: {
    contracts: {
      Rinkeby: {
        address: "0x765A8b9a23F58Db6c8849315C04ACf32b2D55cF8",
        abi: add_to_Rinkeby,
      },
      
    },
  },
}
};
