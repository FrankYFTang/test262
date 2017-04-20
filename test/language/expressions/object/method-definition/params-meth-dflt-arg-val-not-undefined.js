// This file was procedurally generated from the following sources:
// - src/function-forms/dflt-arg-val-not-undefined.case
// - src/function-forms/default/meth.template
/*---
description: Use of intializer when argument value is not `undefined` (method)
esid: sec-runtime-semantics-definemethod
features: [default-parameters]
flags: [generated]
info: |
    MethodDefinition : PropertyName ( StrictFormalParameters ) { FunctionBody }

    [...]
    6. Let closure be FunctionCreate(kind, StrictFormalParameters,
       FunctionBody, scope, strict). If functionPrototype was passed as a
       parameter then pass its value as the functionPrototype optional argument
       of FunctionCreate.
    [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    14.1.19 Runtime Semantics: IteratorBindingInitialization

    FormalsList : FormalsList , FormalParameter

    [...]
    23. Let iteratorRecord be Record {[[Iterator]]:
        CreateListIterator(argumentsList), [[Done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        a. Perform ? IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

---*/
var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;

var callCount = 0;
var obj = {
  method(aFalse = falseCount +=1, aString = stringCount += 1, aNaN = nanCount += 1, a0 = zeroCount += 1, aNull = nullCount += 1, aObj = objCount +=1) {
    assert.sameValue(aFalse, false);
    assert.sameValue(aString, '');
    assert.sameValue(aNaN, NaN);
    assert.sameValue(a0, 0);
    assert.sameValue(aNull, null);
    assert.sameValue(aObj, obj);
    callCount = callCount + 1;
  }
};

obj.method(false, '', NaN, 0, null, obj);

// Stores a reference `ref` for case evaluation
var ref = obj.method;

assert.sameValue(callCount, 1, 'method invoked exactly once');

assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');
