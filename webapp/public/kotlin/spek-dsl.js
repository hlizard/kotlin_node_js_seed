(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'spek-dsl'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'spek-dsl'.");
    }
    root['spek-dsl'] = factory(typeof this['spek-dsl'] === 'undefined' ? {} : this['spek-dsl'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Annotation = Kotlin.kotlin.Annotation;
  var Unit = Kotlin.kotlin.Unit;
  Skip$Yes.prototype = Object.create(Skip.prototype);
  Skip$Yes.prototype.constructor = Skip$Yes;
  Skip$No.prototype = Object.create(Skip.prototype);
  Skip$No.prototype.constructor = Skip$No;
  CachingMode.prototype = Object.create(Enum.prototype);
  CachingMode.prototype.constructor = CachingMode;
  ExecutionResult$Success.prototype = Object.create(ExecutionResult.prototype);
  ExecutionResult$Success.prototype.constructor = ExecutionResult$Success;
  ExecutionResult$Failure.prototype = Object.create(ExecutionResult.prototype);
  ExecutionResult$Failure.prototype.constructor = ExecutionResult$Failure;
  SynonymType.prototype = Object.create(Enum.prototype);
  SynonymType.prototype.constructor = SynonymType;
  DescriptionLocation.prototype = Object.create(Enum.prototype);
  DescriptionLocation.prototype.constructor = DescriptionLocation;
  function Spek(root) {
    this.root = root;
  }
  Spek.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Spek',
    interfaces: []
  };
  function Skip() {
  }
  function Skip$Yes(reason) {
    if (reason === void 0)
      reason = null;
    Skip.call(this);
    this.reason = reason;
  }
  Skip$Yes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Yes',
    interfaces: [Skip]
  };
  function Skip$No() {
    Skip$No_instance = this;
    Skip.call(this);
  }
  Skip$No.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'No',
    interfaces: [Skip]
  };
  var Skip$No_instance = null;
  function Skip$No_getInstance() {
    if (Skip$No_instance === null) {
      new Skip$No();
    }
    return Skip$No_instance;
  }
  Skip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Skip',
    interfaces: []
  };
  function Root() {
  }
  Root.prototype.include_4svue7$ = function (spek) {
    spek.root(this);
  };
  Root.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Root',
    interfaces: [GroupBody]
  };
  function GroupBody() {
  }
  GroupBody.prototype.group_e3c8qh$ = function (description, skip, defaultCachingMode, preserveExecutionOrder, failFast, body, callback$default) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    if (defaultCachingMode === void 0)
      defaultCachingMode = CachingMode$INHERIT_getInstance();
    if (preserveExecutionOrder === void 0)
      preserveExecutionOrder = false;
    if (failFast === void 0)
      failFast = false;
    callback$default ? callback$default(description, skip, defaultCachingMode, preserveExecutionOrder, failFast, body) : this.group_e3c8qh$$default(description, skip, defaultCachingMode, preserveExecutionOrder, failFast, body);
  };
  GroupBody.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GroupBody',
    interfaces: [TestContainer, LifecycleAware]
  };
  function LifecycleAware() {
  }
  LifecycleAware.prototype.memoized_kkxrei$ = function (mode, factory, callback$default) {
    if (mode === void 0)
      mode = this.defaultCachingMode;
    return callback$default ? callback$default(mode, factory) : this.memoized_kkxrei$$default(mode, factory);
  };
  LifecycleAware.prototype.memoized_64z3l$ = function (mode, factory, destructor, callback$default) {
    if (mode === void 0)
      mode = this.defaultCachingMode;
    return callback$default ? callback$default(mode, factory, destructor) : this.memoized_64z3l$$default(mode, factory, destructor);
  };
  LifecycleAware.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleAware',
    interfaces: [ScopeBody]
  };
  function ScopeBody() {
  }
  ScopeBody.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ScopeBody',
    interfaces: []
  };
  function TestContainer() {
  }
  TestContainer.prototype.test_wkze1r$ = function (description, skip, timeout, body, callback$default) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    if (timeout === void 0)
      timeout = this.defaultTimeout;
    callback$default ? callback$default(description, skip, timeout, body) : this.test_wkze1r$$default(description, skip, timeout, body);
  };
  TestContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TestContainer',
    interfaces: []
  };
  function TestBody() {
  }
  TestBody.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TestBody',
    interfaces: [ScopeBody]
  };
  function CachingMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CachingMode_initFields() {
    CachingMode_initFields = function () {
    };
    CachingMode$GROUP_instance = new CachingMode('GROUP', 0);
    CachingMode$EACH_GROUP_instance = new CachingMode('EACH_GROUP', 1);
    CachingMode$SCOPE_instance = new CachingMode('SCOPE', 2);
    CachingMode$TEST_instance = new CachingMode('TEST', 3);
    CachingMode$INHERIT_instance = new CachingMode('INHERIT', 4);
  }
  var CachingMode$GROUP_instance;
  function CachingMode$GROUP_getInstance() {
    CachingMode_initFields();
    return CachingMode$GROUP_instance;
  }
  var CachingMode$EACH_GROUP_instance;
  function CachingMode$EACH_GROUP_getInstance() {
    CachingMode_initFields();
    return CachingMode$EACH_GROUP_instance;
  }
  var CachingMode$SCOPE_instance;
  function CachingMode$SCOPE_getInstance() {
    CachingMode_initFields();
    return CachingMode$SCOPE_instance;
  }
  var CachingMode$TEST_instance;
  function CachingMode$TEST_getInstance() {
    CachingMode_initFields();
    return CachingMode$TEST_instance;
  }
  var CachingMode$INHERIT_instance;
  function CachingMode$INHERIT_getInstance() {
    CachingMode_initFields();
    return CachingMode$INHERIT_instance;
  }
  CachingMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CachingMode',
    interfaces: [Enum]
  };
  function CachingMode$values() {
    return [CachingMode$GROUP_getInstance(), CachingMode$EACH_GROUP_getInstance(), CachingMode$SCOPE_getInstance(), CachingMode$TEST_getInstance(), CachingMode$INHERIT_getInstance()];
  }
  CachingMode.values = CachingMode$values;
  function CachingMode$valueOf(name) {
    switch (name) {
      case 'GROUP':
        return CachingMode$GROUP_getInstance();
      case 'EACH_GROUP':
        return CachingMode$EACH_GROUP_getInstance();
      case 'SCOPE':
        return CachingMode$SCOPE_getInstance();
      case 'TEST':
        return CachingMode$TEST_getInstance();
      case 'INHERIT':
        return CachingMode$INHERIT_getInstance();
      default:throwISE('No enum constant org.spekframework.spek2.lifecycle.CachingMode.' + name);
    }
  }
  CachingMode.valueOf_61zpoe$ = CachingMode$valueOf;
  function ExecutionResult() {
  }
  function ExecutionResult$Success() {
    ExecutionResult$Success_instance = this;
    ExecutionResult.call(this);
  }
  ExecutionResult$Success.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Success',
    interfaces: [ExecutionResult]
  };
  var ExecutionResult$Success_instance = null;
  function ExecutionResult$Success_getInstance() {
    if (ExecutionResult$Success_instance === null) {
      new ExecutionResult$Success();
    }
    return ExecutionResult$Success_instance;
  }
  function ExecutionResult$Failure(cause) {
    ExecutionResult.call(this);
    this.cause = cause;
  }
  ExecutionResult$Failure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Failure',
    interfaces: [ExecutionResult]
  };
  ExecutionResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExecutionResult',
    interfaces: []
  };
  function GroupScope() {
  }
  GroupScope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GroupScope',
    interfaces: [Scope]
  };
  function LifecycleListener() {
  }
  LifecycleListener.prototype.beforeExecuteTest_ujnv26$ = function (test) {
  };
  LifecycleListener.prototype.afterExecuteTest_scfm17$ = function (test, result) {
  };
  LifecycleListener.prototype.beforeExecuteGroup_utodmz$ = function (group) {
  };
  LifecycleListener.prototype.afterExecuteGroup_5o36v6$ = function (group, result) {
  };
  LifecycleListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleListener',
    interfaces: []
  };
  function MemoizedValue() {
  }
  MemoizedValue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MemoizedValue',
    interfaces: []
  };
  function Scope() {
  }
  Scope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Scope',
    interfaces: []
  };
  function TestScope() {
  }
  TestScope.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TestScope',
    interfaces: [Scope]
  };
  function Experimental() {
  }
  Experimental.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Experimental',
    interfaces: [Annotation]
  };
  function Ignore() {
  }
  Ignore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ignore',
    interfaces: [Annotation]
  };
  function SpekDsl() {
  }
  SpekDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpekDsl',
    interfaces: [Annotation]
  };
  function SynonymType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SynonymType_initFields() {
    SynonymType_initFields = function () {
    };
    SynonymType$GROUP_instance = new SynonymType('GROUP', 0);
    SynonymType$TEST_instance = new SynonymType('TEST', 1);
  }
  var SynonymType$GROUP_instance;
  function SynonymType$GROUP_getInstance() {
    SynonymType_initFields();
    return SynonymType$GROUP_instance;
  }
  var SynonymType$TEST_instance;
  function SynonymType$TEST_getInstance() {
    SynonymType_initFields();
    return SynonymType$TEST_instance;
  }
  SynonymType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SynonymType',
    interfaces: [Enum]
  };
  function SynonymType$values() {
    return [SynonymType$GROUP_getInstance(), SynonymType$TEST_getInstance()];
  }
  SynonymType.values = SynonymType$values;
  function SynonymType$valueOf(name) {
    switch (name) {
      case 'GROUP':
        return SynonymType$GROUP_getInstance();
      case 'TEST':
        return SynonymType$TEST_getInstance();
      default:throwISE('No enum constant org.spekframework.spek2.meta.SynonymType.' + name);
    }
  }
  SynonymType.valueOf_61zpoe$ = SynonymType$valueOf;
  function Synonym(type, prefix, excluded, runnable) {
    if (prefix === void 0)
      prefix = '';
    if (excluded === void 0)
      excluded = false;
    if (runnable === void 0)
      runnable = true;
    this.type = type;
    this.prefix = prefix;
    this.excluded = excluded;
    this.runnable = runnable;
  }
  Synonym.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Synonym',
    interfaces: [Annotation]
  };
  function Descriptions(sources) {
    this.sources = sources;
  }
  Descriptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Descriptions',
    interfaces: [Annotation]
  };
  function DescriptionLocation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DescriptionLocation_initFields() {
    DescriptionLocation_initFields = function () {
    };
    DescriptionLocation$TYPE_PARAMETER_instance = new DescriptionLocation('TYPE_PARAMETER', 0);
    DescriptionLocation$VALUE_PARAMETER_instance = new DescriptionLocation('VALUE_PARAMETER', 1);
  }
  var DescriptionLocation$TYPE_PARAMETER_instance;
  function DescriptionLocation$TYPE_PARAMETER_getInstance() {
    DescriptionLocation_initFields();
    return DescriptionLocation$TYPE_PARAMETER_instance;
  }
  var DescriptionLocation$VALUE_PARAMETER_instance;
  function DescriptionLocation$VALUE_PARAMETER_getInstance() {
    DescriptionLocation_initFields();
    return DescriptionLocation$VALUE_PARAMETER_instance;
  }
  DescriptionLocation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DescriptionLocation',
    interfaces: [Enum]
  };
  function DescriptionLocation$values() {
    return [DescriptionLocation$TYPE_PARAMETER_getInstance(), DescriptionLocation$VALUE_PARAMETER_getInstance()];
  }
  DescriptionLocation.values = DescriptionLocation$values;
  function DescriptionLocation$valueOf(name) {
    switch (name) {
      case 'TYPE_PARAMETER':
        return DescriptionLocation$TYPE_PARAMETER_getInstance();
      case 'VALUE_PARAMETER':
        return DescriptionLocation$VALUE_PARAMETER_getInstance();
      default:throwISE('No enum constant org.spekframework.spek2.meta.DescriptionLocation.' + name);
    }
  }
  DescriptionLocation.valueOf_61zpoe$ = DescriptionLocation$valueOf;
  function Description(location, index) {
    this.location = location;
    this.index = index;
  }
  Description.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Description',
    interfaces: [Annotation]
  };
  function Feature$lambda(closure$body) {
    return function ($receiver) {
      closure$body(new FeatureBody($receiver));
      return Unit;
    };
  }
  function Feature($receiver, description, body) {
    $receiver.group_e3c8qh$('Feature: ' + description, void 0, CachingMode$EACH_GROUP_getInstance(), void 0, void 0, Feature$lambda(body));
  }
  function FeatureBody(delegate) {
    this.delegate = delegate;
  }
  Object.defineProperty(FeatureBody.prototype, 'defaultTimeout', {
    get: function () {
      return this.delegate.defaultTimeout;
    },
    set: function (value) {
      this.delegate.defaultTimeout = value;
    }
  });
  function FeatureBody$Scenario$lambda(closure$body) {
    return function ($receiver) {
      closure$body(new ScenarioBody($receiver));
      return Unit;
    };
  }
  FeatureBody.prototype.Scenario_ernmfi$ = function (description, body) {
    this.delegate.group_e3c8qh$('Scenario: ' + description, void 0, CachingMode$SCOPE_getInstance(), true, true, FeatureBody$Scenario$lambda(body));
  };
  FeatureBody.prototype.beforeEachScenario_o14v8n$ = function (fixture) {
    this.delegate.beforeEachGroup_o14v8n$(fixture);
  };
  FeatureBody.prototype.afterEachScenario_o14v8n$ = function (fixture) {
    this.delegate.afterEachGroup_o14v8n$(fixture);
  };
  FeatureBody.prototype.beforeFeature_o14v8n$ = function (fixture) {
    this.delegate.beforeGroup_o14v8n$(fixture);
  };
  FeatureBody.prototype.afterFeature_o14v8n$ = function (fixture) {
    this.delegate.afterGroup_o14v8n$(fixture);
  };
  FeatureBody.prototype.beforeEachGroup_o14v8n$ = function (fixture) {
    this.beforeEachScenario_o14v8n$(fixture);
  };
  FeatureBody.prototype.afterEachGroup_o14v8n$ = function (fixture) {
    this.afterEachScenario_o14v8n$(fixture);
  };
  FeatureBody.prototype.beforeGroup_o14v8n$ = function (fixture) {
    this.beforeFeature_o14v8n$(fixture);
  };
  FeatureBody.prototype.afterGroup_o14v8n$ = function (fixture) {
    this.afterFeature_o14v8n$(fixture);
  };
  Object.defineProperty(FeatureBody.prototype, 'defaultCachingMode', {
    get: function () {
      return this.delegate.defaultCachingMode;
    }
  });
  FeatureBody.prototype.afterEachTest_o14v8n$ = function (fixture) {
    return this.delegate.afterEachTest_o14v8n$(fixture);
  };
  FeatureBody.prototype.beforeEachTest_o14v8n$ = function (fixture) {
    return this.delegate.beforeEachTest_o14v8n$(fixture);
  };
  FeatureBody.prototype.memoized_287e2$ = function () {
    return this.delegate.memoized_287e2$();
  };
  FeatureBody.prototype.memoized_kkxrei$$default = function (mode, factory) {
    return this.delegate.memoized_kkxrei$$default(mode, factory);
  };
  FeatureBody.prototype.memoized_64z3l$$default = function (mode, factory, destructor) {
    return this.delegate.memoized_64z3l$$default(mode, factory, destructor);
  };
  FeatureBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FeatureBody',
    interfaces: [LifecycleAware]
  };
  function ScenarioBody(delegate) {
    this.delegate = delegate;
  }
  Object.defineProperty(ScenarioBody.prototype, 'defaultTimeout', {
    get: function () {
      return this.delegate.defaultTimeout;
    },
    set: function (value) {
      this.delegate.defaultTimeout = value;
    }
  });
  ScenarioBody.prototype.Given_55ih51$ = function (description, timeout, body) {
    if (timeout === void 0)
      timeout = this.defaultTimeout;
    this.delegate.test_wkze1r$('Given: ' + description, void 0, timeout, body);
  };
  ScenarioBody.prototype.When_55ih51$ = function (description, timeout, body) {
    if (timeout === void 0)
      timeout = this.defaultTimeout;
    this.delegate.test_wkze1r$('When: ' + description, void 0, timeout, body);
  };
  ScenarioBody.prototype.Then_55ih51$ = function (description, timeout, body) {
    if (timeout === void 0)
      timeout = this.defaultTimeout;
    this.delegate.test_wkze1r$('Then: ' + description, void 0, timeout, body);
  };
  ScenarioBody.prototype.And_55ih51$ = function (description, timeout, body) {
    if (timeout === void 0)
      timeout = this.defaultTimeout;
    this.delegate.test_wkze1r$('And: ' + description, void 0, timeout, body);
  };
  ScenarioBody.prototype.beforeScenario_o14v8n$ = function (fixture) {
    this.delegate.beforeGroup_o14v8n$(fixture);
  };
  ScenarioBody.prototype.afterScenario_o14v8n$ = function (fixture) {
    this.delegate.afterGroup_o14v8n$(fixture);
  };
  ScenarioBody.prototype.beforeEachStep_o14v8n$ = function (fixture) {
    this.delegate.beforeEachTest_o14v8n$(fixture);
  };
  ScenarioBody.prototype.afterEachStep_o14v8n$ = function (fixture) {
    this.delegate.afterEachTest_o14v8n$(fixture);
  };
  ScenarioBody.prototype.beforeEachTest_o14v8n$ = function (fixture) {
    this.beforeEachStep_o14v8n$(fixture);
  };
  ScenarioBody.prototype.afterEachTest_o14v8n$ = function (fixture) {
    this.afterEachStep_o14v8n$(fixture);
  };
  ScenarioBody.prototype.beforeGroup_o14v8n$ = function (fixture) {
    this.beforeScenario_o14v8n$(fixture);
  };
  ScenarioBody.prototype.afterGroup_o14v8n$ = function (fixture) {
    this.afterScenario_o14v8n$(fixture);
  };
  Object.defineProperty(ScenarioBody.prototype, 'defaultCachingMode', {
    get: function () {
      return this.delegate.defaultCachingMode;
    }
  });
  ScenarioBody.prototype.afterEachGroup_o14v8n$ = function (fixture) {
    return this.delegate.afterEachGroup_o14v8n$(fixture);
  };
  ScenarioBody.prototype.beforeEachGroup_o14v8n$ = function (fixture) {
    return this.delegate.beforeEachGroup_o14v8n$(fixture);
  };
  ScenarioBody.prototype.memoized_287e2$ = function () {
    return this.delegate.memoized_287e2$();
  };
  ScenarioBody.prototype.memoized_kkxrei$$default = function (mode, factory) {
    return this.delegate.memoized_kkxrei$$default(mode, factory);
  };
  ScenarioBody.prototype.memoized_64z3l$$default = function (mode, factory, destructor) {
    return this.delegate.memoized_64z3l$$default(mode, factory, destructor);
  };
  ScenarioBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScenarioBody',
    interfaces: [LifecycleAware]
  };
  function Suite(delegate) {
    this.delegate = delegate;
  }
  Object.defineProperty(Suite.prototype, 'defaultTimeout', {
    get: function () {
      return this.delegate.defaultTimeout;
    },
    set: function (value) {
      this.delegate.defaultTimeout = value;
    }
  });
  Suite.prototype.describe_npqwdt$ = function (description, skip, body) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    createSuite(this.delegate, description, skip, body);
  };
  Suite.prototype.context_npqwdt$ = function (description, skip, body) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    createSuite(this.delegate, description, skip, body);
  };
  Suite.prototype.xdescribe_yoj2uf$ = function (description, reason, body) {
    if (reason === void 0)
      reason = '';
    createSuite(this.delegate, description, new Skip$Yes(reason), body);
  };
  Suite.prototype.xcontext_yoj2uf$ = function (description, reason, body) {
    if (reason === void 0)
      reason = '';
    createSuite(this.delegate, description, new Skip$Yes(reason), body);
  };
  Suite.prototype.it_wkze1r$ = function (description, skip, timeout, body) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    if (timeout === void 0)
      timeout = this.delegate.defaultTimeout;
    createTest(this.delegate, description, skip, timeout, body);
  };
  Suite.prototype.xit_cw15lj$ = function (description, reason, timeout, body) {
    if (reason === void 0)
      reason = '';
    if (timeout === void 0)
      timeout = this.delegate.defaultTimeout;
    createTest(this.delegate, description, new Skip$Yes(reason), timeout, body);
  };
  Suite.prototype.before_o14v8n$ = function (cb) {
    this.beforeGroup_o14v8n$(cb);
  };
  Suite.prototype.after_o14v8n$ = function (cb) {
    this.afterGroup_o14v8n$(cb);
  };
  Suite.prototype.beforeEach_o14v8n$ = function (cb) {
    this.beforeEachTest_o14v8n$(cb);
  };
  Suite.prototype.afterEach_o14v8n$ = function (cb) {
    this.afterEachTest_o14v8n$(cb);
  };
  Object.defineProperty(Suite.prototype, 'defaultCachingMode', {
    get: function () {
      return this.delegate.defaultCachingMode;
    }
  });
  Suite.prototype.afterEachGroup_o14v8n$ = function (fixture) {
    return this.delegate.afterEachGroup_o14v8n$(fixture);
  };
  Suite.prototype.afterEachTest_o14v8n$ = function (fixture) {
    return this.delegate.afterEachTest_o14v8n$(fixture);
  };
  Suite.prototype.afterGroup_o14v8n$ = function (fixture) {
    return this.delegate.afterGroup_o14v8n$(fixture);
  };
  Suite.prototype.beforeEachGroup_o14v8n$ = function (fixture) {
    return this.delegate.beforeEachGroup_o14v8n$(fixture);
  };
  Suite.prototype.beforeEachTest_o14v8n$ = function (fixture) {
    return this.delegate.beforeEachTest_o14v8n$(fixture);
  };
  Suite.prototype.beforeGroup_o14v8n$ = function (fixture) {
    return this.delegate.beforeGroup_o14v8n$(fixture);
  };
  Suite.prototype.memoized_287e2$ = function () {
    return this.delegate.memoized_287e2$();
  };
  Suite.prototype.memoized_kkxrei$$default = function (mode, factory) {
    return this.delegate.memoized_kkxrei$$default(mode, factory);
  };
  Suite.prototype.memoized_64z3l$$default = function (mode, factory, destructor) {
    return this.delegate.memoized_64z3l$$default(mode, factory, destructor);
  };
  Suite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Suite',
    interfaces: [LifecycleAware]
  };
  function describe($receiver, description, skip, body) {
    if (skip === void 0)
      skip = Skip$No_getInstance();
    createSuite($receiver, description, skip, body);
  }
  function xdescribe($receiver, description, reason, body) {
    if (reason === void 0)
      reason = '';
    createSuite($receiver, description, new Skip$Yes(reason), body);
  }
  function createSuite$lambda(closure$body) {
    return function ($receiver) {
      closure$body(new Suite($receiver));
      return Unit;
    };
  }
  function createSuite($receiver, description, skip, body) {
    $receiver.group_e3c8qh$(description, skip, CachingMode$TEST_getInstance(), void 0, void 0, createSuite$lambda(body));
  }
  function createTest($receiver, description, skip, timeout, body) {
    $receiver.test_wkze1r$(description, skip, timeout, body);
  }
  var package$org = _.org || (_.org = {});
  var package$spekframework = package$org.spekframework || (package$org.spekframework = {});
  var package$spek2 = package$spekframework.spek2 || (package$spekframework.spek2 = {});
  package$spek2.Spek = Spek;
  Skip.Yes = Skip$Yes;
  Object.defineProperty(Skip, 'No', {
    get: Skip$No_getInstance
  });
  var package$dsl = package$spek2.dsl || (package$spek2.dsl = {});
  package$dsl.Skip = Skip;
  package$dsl.Root = Root;
  package$dsl.GroupBody = GroupBody;
  package$dsl.LifecycleAware = LifecycleAware;
  package$dsl.ScopeBody = ScopeBody;
  package$dsl.TestContainer = TestContainer;
  package$dsl.TestBody = TestBody;
  Object.defineProperty(CachingMode, 'GROUP', {
    get: CachingMode$GROUP_getInstance
  });
  Object.defineProperty(CachingMode, 'EACH_GROUP', {
    get: CachingMode$EACH_GROUP_getInstance
  });
  Object.defineProperty(CachingMode, 'SCOPE', {
    get: CachingMode$SCOPE_getInstance
  });
  Object.defineProperty(CachingMode, 'TEST', {
    get: CachingMode$TEST_getInstance
  });
  Object.defineProperty(CachingMode, 'INHERIT', {
    get: CachingMode$INHERIT_getInstance
  });
  var package$lifecycle = package$spek2.lifecycle || (package$spek2.lifecycle = {});
  package$lifecycle.CachingMode = CachingMode;
  Object.defineProperty(ExecutionResult, 'Success', {
    get: ExecutionResult$Success_getInstance
  });
  ExecutionResult.Failure = ExecutionResult$Failure;
  package$lifecycle.ExecutionResult = ExecutionResult;
  package$lifecycle.GroupScope = GroupScope;
  package$lifecycle.LifecycleListener = LifecycleListener;
  package$lifecycle.MemoizedValue = MemoizedValue;
  package$lifecycle.Scope = Scope;
  package$lifecycle.TestScope = TestScope;
  var package$meta = package$spek2.meta || (package$spek2.meta = {});
  package$meta.Experimental = Experimental;
  package$meta.Ignore = Ignore;
  package$meta.SpekDsl = SpekDsl;
  Object.defineProperty(SynonymType, 'GROUP', {
    get: SynonymType$GROUP_getInstance
  });
  Object.defineProperty(SynonymType, 'TEST', {
    get: SynonymType$TEST_getInstance
  });
  package$meta.SynonymType = SynonymType;
  package$meta.Synonym = Synonym;
  package$meta.Descriptions = Descriptions;
  Object.defineProperty(DescriptionLocation, 'TYPE_PARAMETER', {
    get: DescriptionLocation$TYPE_PARAMETER_getInstance
  });
  Object.defineProperty(DescriptionLocation, 'VALUE_PARAMETER', {
    get: DescriptionLocation$VALUE_PARAMETER_getInstance
  });
  package$meta.DescriptionLocation = DescriptionLocation;
  package$meta.Description = Description;
  var package$style = package$spek2.style || (package$spek2.style = {});
  var package$gherkin = package$style.gherkin || (package$style.gherkin = {});
  package$gherkin.Feature_g3h7k7$ = Feature;
  package$gherkin.FeatureBody = FeatureBody;
  package$gherkin.ScenarioBody = ScenarioBody;
  var package$specification = package$style.specification || (package$style.specification = {});
  package$specification.Suite = Suite;
  package$specification.describe_5s2990$ = describe;
  package$specification.xdescribe_yenmj0$ = xdescribe;
  GroupBody.prototype.memoized_kkxrei$ = LifecycleAware.prototype.memoized_kkxrei$;
  GroupBody.prototype.memoized_64z3l$ = LifecycleAware.prototype.memoized_64z3l$;
  GroupBody.prototype.test_wkze1r$ = TestContainer.prototype.test_wkze1r$;
  Root.prototype.group_e3c8qh$ = GroupBody.prototype.group_e3c8qh$;
  Root.prototype.memoized_kkxrei$ = GroupBody.prototype.memoized_kkxrei$;
  Root.prototype.memoized_64z3l$ = GroupBody.prototype.memoized_64z3l$;
  Root.prototype.test_wkze1r$ = GroupBody.prototype.test_wkze1r$;
  FeatureBody.prototype.memoized_kkxrei$ = LifecycleAware.prototype.memoized_kkxrei$;
  FeatureBody.prototype.memoized_64z3l$ = LifecycleAware.prototype.memoized_64z3l$;
  ScenarioBody.prototype.memoized_kkxrei$ = LifecycleAware.prototype.memoized_kkxrei$;
  ScenarioBody.prototype.memoized_64z3l$ = LifecycleAware.prototype.memoized_64z3l$;
  Suite.prototype.memoized_kkxrei$ = LifecycleAware.prototype.memoized_kkxrei$;
  Suite.prototype.memoized_64z3l$ = LifecycleAware.prototype.memoized_64z3l$;
  Kotlin.defineModule('spek-dsl', _);
  return _;
}));

//# sourceMappingURL=spek-dsl.js.map
