import { FixedInt, FixedPortion } from "fpnum";

const MAX_RESERVED_RATE = 10_000n;
const MAX_REDEMPTION_RATE = 10_000n;
const MAX_DECAY_RATE = 1_000_000_000n;
const SPLITS_TOTAL_PERCENT = 1_000_000_000n;
const MAX_FEE = 1_000_000_000n;
const MAX_FEE_DISCOUNT = 1_000_000_000n;
const JB_TOKEN_DECIMALS = 18;

export const NATIVE_TOKEN = "0x000000000000000000000000000000000000EEEe";

/**
 * Reserved rate for a ruleset.
 *
 * Has a decimal precision of 4 and a maximum value of 10,000.
 *
 * @extends FixedPortion
 */
export class ReservedRate extends FixedPortion<4> {
  constructor(value: bigint) {
    super(value, 4, MAX_RESERVED_RATE);
  }
}

/**
 * Redemption rate for a ruleset.
 *
 * Has a decimal precision of 4 and a maximum value of 10,000.

 * @extends FixedPortion
 */
export class RedemptionRate extends FixedPortion<4> {
  constructor(value: bigint) {
    super(value, 4, MAX_REDEMPTION_RATE);
  }
}

/**
 * Decay rate for a ruleset.
 *
 * Has a decimal precision of 9 and a maximum value of 1,000,000,000.

 * @extends FixedPortion
 */
export class DecayRate extends FixedPortion<9> {
  constructor(value: bigint) {
    super(value, 9, MAX_DECAY_RATE);
  }
}

/**
 * Ether value.
 *
 * Has a decimal precision of 18.
 *
 * @extends FixedInt
 */
export class Ether extends FixedInt<18> {
  constructor(value: bigint) {
    super(value, 18);
  }
}

/**
 * JB token value.
 *
 * Has a decimal precision of 18.
 *
 * @extends FixedInt
 */
export class JBToken extends FixedInt<typeof JB_TOKEN_DECIMALS> {
  constructor(value: bigint) {
    super(value, JB_TOKEN_DECIMALS);
  }
}

/**
 * ruleset weight.
 *
 * Has a decimal precision of 18.
 *
 * @extends FixedInt
 */
export class RulesetWeight extends FixedInt<18> {
  constructor(value: bigint) {
    super(value, 18);
  }
}
