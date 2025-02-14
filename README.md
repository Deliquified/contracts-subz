# Subz Smart Contracts

<div align="center">
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![LUKSO](https://img.shields.io/badge/LUKSO-Ready-pink.svg)](https://lukso.network)
  [![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.20-blue)](https://docs.soliditylang.org/)
</div>

## Overview

This repository contains the smart contracts for Subz, a decentralized subscription management platform built on LUKSO. The contracts enable creators to deploy their own subscription services with NFT-powered benefits using LSP7 Digital Asset standard.

## Architecture

### Factory Contract

The Factory contract is responsible for deploying individual subscription contracts for creators. It:
- Manages deployment of new subscription contracts
- Maintains registry of deployed contracts
- Handles platform fee collection (2%)
- Enforces standardization across deployments

### Subscription Contract

Each subscription contract is an LSP7-compliant token that:
- Manages subscription logic and payments
- Handles subscriber permissions via `authorizeOperator`
- Processes fixed monthly charges
- Mints NFTs representing active subscriptions
- Enforces immutable pricing

## Key Features

### Secure Payment Model
- Fixed-price immutable subscriptions
- Limited operator permissions
- No unlimited allowances
- Automated compliance checks

### LSP Integration
- LSP7 Digital Asset standard
- Universal Profile compatibility
- Future support for LSP1 (batch transactions)

## Technical Implementation

### Subscription Flow

1. **Contract Deployment**
```solidity
function createSubscription(
    string memory name,
    address recipient,
    address stablecoin
) external returns (address);
```

2. **Subscription Authorization**
```solidity
function authorizeOperator(
    address operator,
    uint256 amount
) external;
```

3. **Payment Processing**
```solidity
function _chargeSubscriber(
    address subscriber
) internal returns (bool);
```

### Security Measures

- **Fixed Price Protection**
```solidity
modifier onlyFixedPrice() {
    require(msg.value == subscriptionPrice, "Invalid payment amount");
    _;
}
```

- **Operator Limitations**
```solidity
modifier onlyAuthorizedAmount(uint256 amount) {
    require(amount == subscriptionPrice, "Invalid operator amount");
    _;
}
```

## Future Improvements

1. **Enhanced LSP Integration**
   - Native LYX payment support via TRANSFER VALUE
   - Improved LSP4 metadata for subscription tiers
   - LSP1 batch transaction support

2. **Multiple Tiers**
   - Tiered subscription levels
   - Unique NFTs per tier
   - Dynamic pricing models

3. **Advanced Features**
   - Content gating mechanisms
   - Loyalty rewards
   - Automated airdrops

## Security

This project is in beta. Use at your own risk.

### Known Limitations
- Fixed price model
- Single token support per contract
- Manual renewal triggers

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Discord: [Join our community](https://discord.gg/yourserver)
- Twitter: [@SubzApp](https://twitter.com/youraccount)
