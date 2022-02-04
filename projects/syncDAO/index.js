const sdk = require('@defillama/sdk');
const SDGContract = "0xcf8829ae9384540c886a151fac3a865794cb9a01"

async function tvl(timestamp, block) {
  const totalSupply = (await sdk.api.erc20.totalSupply({
    block,
    target: SDGContract,
  })).output;

  return { [SDGContract]: totalSupply };
}

module.exports = {
  ethereum:{
    tvl,
  },
  tvl,
};
