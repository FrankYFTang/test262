// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: RangeError thrown when smallestUnit option not one of the allowed string values
features: [Temporal]
---*/

const earlier = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const later = new Temporal.ZonedDateTime(1_000_090_061_987_654_321n, "UTC");
const values = ["era", "eraYear", "other string"];
for (const smallestUnit of values) {
  assert.throws(RangeError, () => earlier.until(later, { smallestUnit }));
}
