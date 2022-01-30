// compatible with stylelint version 13.4.1
module.exports = {
    rules: {
        // Possible errors

        // Color

        // Disallow invalid hex colors.
        'color-no-invalid-hex': true,

        // Font family

        // Disallow duplicate font family names.
        'font-family-no-duplicate-names': true,
        // Disallow missing generic families in lists of font family names.
        'font-family-no-missing-generic-family-keyword': true,

        // Function

        // Disallow an unspaced operator within calc functions.
        'function-calc-no-unspaced-operator': true,
        // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
        'function-linear-gradient-no-nonstandard-direction': true,

        // String

        // Disallow (unescaped) newlines in strings.
        'string-no-newline': true,

        // Unit

        // Disallow unknown units.
        'unit-no-unknown': true,

        // Property

        // Disallow unknown properties.
        'property-no-unknown': [
            true,
            {
                checkPrefixed: true,
            },
        ],

        // Keyframe declaration

        // Disallow !important within keyframe declarations.
        'keyframe-declaration-no-important': true,

        // Declaration block

        // Disallow duplicate properties within declaration blocks.
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
        // Disallow shorthand properties that override related longhand properties within declaration blocks.
        'declaration-block-no-shorthand-property-overrides': true,

        // Block

        // Disallow empty blocks.
        'block-no-empty': true,

        // Selector

        // Disallow unknown pseudo-class selectors.
        'selector-pseudo-class-no-unknown': true,
        // Disallow unknown pseudo-element selectors.
        'selector-pseudo-element-no-unknown': true,
        // Disallow unknown type selectors.
        'selector-type-no-unknown': true,

        // Media feature

        // Disallow unknown media feature names.
        'media-feature-name-no-unknown': true,

        // At-rule

        // Disallow unknown at-rules.
        'at-rule-no-unknown': null,

        // Comment

        // Disallow empty comments.
        'comment-no-empty': true,

        // General / Sheet

        // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
        'no-descending-specificity': null,
        // Disallow duplicate @import rules within a stylesheet.
        'no-duplicate-at-import-rules': true,
        // Disallow duplicate selectors.
        'no-duplicate-selectors': null,
        // Disallow empty sources.
        'no-empty-source': true,
        // Disallow extra semicolons (Autofixable).
        'no-extra-semicolons': true,
        // Disallow double-slash comments (//...) which are not supported by CSS.
        'no-invalid-double-slash-comments': true,

        // Limit language features

        // Color

        // Require (where possible) or disallow named colors.
        'color-named': 'never',
        // Disallow hex colors.
        'color-no-hex': null,

        // Function

        // Specify a disallowed-list of disallowed functions.
        'function-disallowed-list': null,
        // Disallow scheme-relative urls.
        'function-url-no-scheme-relative': null,
        // Specify a disallowed-list of disallowed url schemes.
        'function-url-scheme-disallowed-list': null,
        // Specify a allowed-list of allowed url schemes.
        'function-url-scheme-allowed-list': null,
        // Specify a allowed-list of allowed functions.
        'function-allowed-list': null,

        // Keyframes

        // Specify a pattern for keyframe names.
        'keyframes-name-pattern': null,

        // Number

        // Limit the number of decimal places allowed in numbers.
        'number-max-precision': 6,

        // Time

        // Specify the minimum number of milliseconds for time values.
        'time-min-milliseconds': null,

        // Unit

        // Specify a disallowed-list of disallowed units.
        'unit-disallowed-list': null,
        // Specify a allowed-list of allowed units.
        'unit-allowed-list': null,

        // Shorthand property

        // Disallow redundant values in shorthand properties (Autofixable).
        'shorthand-property-no-redundant-values': null,

        // Value

        // Disallow vendor prefixes for values.
        'value-no-vendor-prefix': true,

        // Custom property

        // Specify a pattern for custom properties.
        'custom-property-pattern': null,

        // Property

        // Specify a disallowed-list of disallowed properties.
        'property-disallowed-list': null,
        // Disallow vendor prefixes for properties.
        'property-no-vendor-prefix': true,
        // Specify a allowed-list of allowed properties.
        'property-allowed-list': null,

        // Declaration

        // Disallow longhand properties that can be combined into one shorthand property.
        'declaration-block-no-redundant-longhand-properties': null,
        // Disallow !important within declarations.
        'declaration-no-important': [
            true,
            {
                severity: 'warning',
            },
        ],
        // Specify a disallowed-list of disallowed property and unit pairs within declarations.
        'declaration-property-unit-disallowed-list': null,
        // Specify a allowed-list of allowed property and unit pairs within declarations.
        'declaration-property-unit-allowed-list': null,
        // Specify a disallowed-list of disallowed property and value pairs within declarations.
        'declaration-property-value-disallowed-list': {
            flex: ['initial', 'auto', 'none'],
        },
        // Specify a allowed-list of allowed property and value pairs within declarations.
        'declaration-property-value-allowed-list': null,

        // Declaration block

        // Limit the number of declaration within single line declaration blocks.
        'declaration-block-single-line-max-declarations': 1,

        // Selector

        // Specify a disallowed-list of disallowed attribute operators.
        'selector-attribute-operator-disallowed-list': null,
        // Specify a allowed-list of allowed attribute operators.
        'selector-attribute-operator-allowed-list': null,
        // Specify a pattern for class selectors.
        'selector-class-pattern': null,
        // Specify a disallowed-list of disallowed combinators.
        'selector-combinator-disallowed-list': null,
        // Specify a allowed-list of allowed combinators.
        'selector-combinator-allowed-list': null,
        // Specify a pattern for id selectors.
        'selector-id-pattern': null,
        // Limit the number of attribute selectors in a selector.
        'selector-max-attribute': null,
        // Limit the number of classes in a selector.
        'selector-max-class': null,
        // Limit the number of combinators in a selector.
        'selector-max-combinators': null,
        // Limit the number of compound selectors in a selector.
        'selector-max-compound-selectors': null,
        // Limit the number of adjacent empty lines within selectors (Autofixable).
        'selector-max-empty-lines': 0,
        // Limit the number of id selectors in a selector.
        'selector-max-id': null,
        // Limit the number of pseudo-classes in a selector.
        'selector-max-pseudo-class': null,
        // Limit the specificity of selectors.
        'selector-max-specificity': null,
        // Limit the number of type in a selector.
        'selector-max-type': null,
        // Limit the number of universal selectors in a selector.
        'selector-max-universal': null,
        // Specify a pattern for the selectors of rules nested within rules.
        'selector-nested-pattern': null,
        // Disallow qualifying a selector by type.
        'selector-no-qualifying-type': null,
        // Disallow vendor prefixes for selectors.
        'selector-no-vendor-prefix': null,
        // Specify a disallowed-list of disallowed pseudo-class selectors.
        'selector-pseudo-class-disallowed-list': null,
        // Specify a allowed-list of allowed pseudo-class selectors.
        'selector-pseudo-class-allowed-list': null,
        // Specify a disallowed-list of disallowed pseudo-element selectors.
        'selector-pseudo-element-disallowed-list': null,
        // Specify a allowed-list of allowed pseudo-element selectors.
        'selector-pseudo-element-allowed-list': null,

        // Media feature

        // Specify a disallowed-list of disallowed media feature names.
        'media-feature-name-disallowed-list': null,
        // Disallow vendor prefixes for media feature names.
        'media-feature-name-no-vendor-prefix': true,
        // Specify a allowed-list of allowed media feature name and value pairs.
        'media-feature-name-value-allowed-list': null,
        // Specify a allowed-list of allowed media feature names.
        'media-feature-name-allowed-list': null,

        // Custom media

        // Specify a pattern for custom media query names.
        'custom-media-pattern': null,

        // At-rule

        // Specify a disallowed-list of disallowed at-rules.
        'at-rule-disallowed-list': null,
        // Disallow vendor prefixes for at-rules.
        'at-rule-no-vendor-prefix': true,
        // Specify a require-list of properties for an at-rule.
        'at-rule-property-required-list': null,
        // Specify a allowed-list of allowed at-rules.
        'at-rule-allowed-list': null,

        // Comment

        // Specify a disallowed-list of disallowed words within comments.
        'comment-word-disallowed-list': null,

        // General / Sheet

        // Limit the depth of nesting.
        'max-nesting-depth': null,
        // Disallow unknown animations.
        'no-unknown-animations': null,

        // Stylistic issues

        // Color

        // Specify lowercase or uppercase for hex colors (Autofixable).
        'color-hex-case': 'lower',
        // Specify short or long notation for hex colors (Autofixable).
        'color-hex-length': 'short',

        // Font family

        // Specify whether or not quotation marks should be used around font family
        'font-family-name-quotes': 'always-where-recommended',

        // Font weight

        // Require numeric or named (where possible) font-weight values.
        'font-weight-notation': null,

        // Function

        // Require a newline or disallow whitespace after the commas of functions.
        'function-comma-newline-after': 'always-multi-line',
        // Require a newline or disallow whitespace before the commas of functions.
        'function-comma-newline-before': 'never-multi-line',
        // Require a single space or disallow whitespace after the commas of functions (Autofixable).
        'function-comma-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the commas of functions (Autofixable).
        'function-comma-space-before': 'never',
        // Limit the number of adjacent empty lines within functions (Autofixable).
        'function-max-empty-lines': 0,
        // Specify lowercase or uppercase for function names (Autofixable).
        'function-name-case': 'lower',
        // Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).
        'function-parentheses-newline-inside': 'always-multi-line',
        // Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
        'function-parentheses-space-inside': 'never-single-line',
        // Require or disallow quotes for urls.
        'function-url-quotes': 'always',
        // Require or disallow whitespace after functions (Autofixable).
        'function-whitespace-after': 'always',

        // Number

        // Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
        'number-leading-zero': 'always',
        // Disallow trailing zeros in numbers (Autofixable).
        'number-no-trailing-zeros': true,

        // String

        // Specify single or double quotes around strings (Autofixable).
        'string-quotes': 'single',

        // Length

        // Disallow units for zero lengths (Autofixable).
        'length-zero-no-unit': true,

        // Unit

        // Specify lowercase or uppercase for units (Autofixable).
        'unit-case': 'lower',

        // Value

        // Specify lowercase or uppercase for keywords values (Autofixable).
        'value-keyword-case': null,

        // Value list

        // Require a newline or disallow whitespace after the commas of value lists (Autofixable).
        'value-list-comma-newline-after': 'always-multi-line',
        // Require a newline or disallow whitespace before the commas of value lists.
        'value-list-comma-newline-before': 'never-multi-line',
        // Require a single space or disallow whitespace after the commas of value lists (Autofixable).
        'value-list-comma-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the commas of value lists (Autofixable).
        'value-list-comma-space-before': 'never',
        // Limit the number of adjacent empty lines within value lists (Autofixable).
        'value-list-max-empty-lines': 0,

        // Custom property

        // Require or disallow an empty line before custom properties (Autofixable).
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],

        // Property

        // Specify lowercase or uppercase for properties (Autofixable).
        'property-case': 'lower',

        // Declaration

        // Require a single space or disallow whitespace after the bang of declarations (Autofixable).
        'declaration-bang-space-after': 'never',
        // Require a single space or disallow whitespace before the bang of declarations (Autofixable).
        'declaration-bang-space-before': 'always',
        // Require a newline or disallow whitespace after the colon of declarations (Autofixable).
        'declaration-colon-newline-after': 'always-multi-line',
        // Require a single space or disallow whitespace after the colon of declarations (Autofixable).
        'declaration-colon-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the colon of declarations (Autofixable).
        'declaration-colon-space-before': 'never',
        // Require or disallow an empty line before declarations (Autofixable).
        'declaration-empty-line-before': [
            'always',
            {
                except: ['after-declaration', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],

        // Declaration block

        // Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-newline-after': 'always',
        // Require a newline or disallow whitespace before the semicolons of declaration blocks.
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        // Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-space-before': 'never',
        // Require or disallow a trailing semicolon within declaration blocks (Autofixable).
        'declaration-block-trailing-semicolon': 'always',

        // Block

        // Require or disallow an empty line before the closing brace of blocks (Autofixable).
        'block-closing-brace-empty-line-before': 'never',
        // Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
        'block-closing-brace-newline-after': 'always',
        // Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).
        'block-closing-brace-newline-before': 'always-multi-line',
        // Require a single space or disallow whitespace after the closing brace of blocks.
        'block-closing-brace-space-after': null,
        // Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).
        'block-closing-brace-space-before': 'always-single-line',
        // Require a newline after the opening brace of blocks (Autofixable).
        'block-opening-brace-newline-after': 'always-multi-line',
        // Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).
        'block-opening-brace-newline-before': null,
        // Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).
        'block-opening-brace-space-after': 'always-single-line',
        // Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).
        'block-opening-brace-space-before': 'always-multi-line',

        // Selector

        // Require a single space or disallow whitespace on the inside of the
        // brackets within attribute selectors (Autofixable).
        'selector-attribute-brackets-space-inside': 'never',
        // Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).
        'selector-attribute-operator-space-after': 'never',
        // Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).
        'selector-attribute-operator-space-before': 'never',
        // Require or disallow quotes for attribute values.
        'selector-attribute-quotes': 'always',
        // Require a single space or disallow whitespace after the combinators of selectors (Autofixable).
        'selector-combinator-space-after': 'always',
        // Require a single space or disallow whitespace before the combinators of selectors (Autofixable).
        'selector-combinator-space-before': 'always',
        // Disallow non-space characters for descendant combinators of selectors (Autofixable).
        'selector-descendant-combinator-no-non-space': true,
        // Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
        'selector-pseudo-class-case': 'lower',
        // Require a single space or disallow whitespace on the inside of the
        // parentheses within pseudo-class selectors (Autofixable).
        'selector-pseudo-class-parentheses-space-inside': 'never',
        // Specify lowercase or uppercase for pseudo-element selectors (Autofixable).
        'selector-pseudo-element-case': 'lower',
        // Specify single or double colon notation for applicable pseudo-elements (Autofixable).
        'selector-pseudo-element-colon-notation': 'double',
        // Specify lowercase or uppercase for type selector (Autofixable).
        'selector-type-case': 'lower',

        // Selector list

        // Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
        'selector-list-comma-newline-after': 'always',
        // Require a newline or disallow whitespace before the commas of selector lists (Autofixable).
        'selector-list-comma-newline-before': 'never-multi-line',
        // Require a single space or disallow whitespace after the commas of selector lists (Autofixable).
        'selector-list-comma-space-after': null,
        // Require a single space or disallow whitespace before the commas of selector lists (Autofixable).
        'selector-list-comma-space-before': 'never',

        // Rule

        // Require or disallow an empty line before rules (Autofixable).
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['after-single-line-comment', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],

        // Media feature

        // Require a single space or disallow whitespace after the colon in media features (Autofixable).
        'media-feature-colon-space-after': 'always',
        // Require a single space or disallow whitespace before the colon in media features (Autofixable).
        'media-feature-colon-space-before': 'never',
        // Specify lowercase or uppercase for media feature names (Autofixable).
        'media-feature-name-case': 'lower',
        // Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
        'media-feature-parentheses-space-inside': 'never',
        // Require a single space or disallow whitespace after the range operator in media features (Autofixable).
        'media-feature-range-operator-space-after': 'always',
        // Require a single space or disallow whitespace before the range operator in media features (Autofixable).
        'media-feature-range-operator-space-before': 'always',

        // Media query list

        // Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
        'media-query-list-comma-newline-after': 'always-multi-line',
        // Require a newline or disallow whitespace before the commas of media query lists.
        'media-query-list-comma-newline-before': 'never-multi-line',
        // Require a single space or disallow whitespace after the commas of media query lists (Autofixable).
        'media-query-list-comma-space-after': null,
        // Require a single space or disallow whitespace before the commas of media query lists (Autofixable).
        'media-query-list-comma-space-before': 'never',

        // At-rule

        // Require or disallow an empty line before at-rules (Autofixable).
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['after-same-name', 'blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],
        // Specify lowercase or uppercase for at-rules names (Autofixable).
        'at-rule-name-case': 'lower',
        // Require a newline after at-rule names.
        'at-rule-name-newline-after': 'always-multi-line',
        // Require a single space after at-rule names (Autofixable).
        'at-rule-name-space-after': 'always-single-line',
        // Require a newline after the semicolon of at-rules (Autofixable).
        'at-rule-semicolon-newline-after': 'always',
        // Require a single space or disallow whitespace before the semicolons of at rules.
        'at-rule-semicolon-space-before': 'never',

        // Comment

        // Require or disallow an empty line before comments (Autofixable).
        'comment-empty-line-before': null,
        // Require or disallow whitespace on the inside of comment markers (Autofixable).
        'comment-whitespace-inside': 'always',

        // General / Sheet

        // Specify indentation (Autofixable).
        indentation: 4,
        // Specify unix or windows linebreaks (Autofixable).
        linebreaks: null,
        // Limit the number of adjacent empty lines (Autofixable).
        'max-empty-lines': 5,
        // Limit the length of a line.
        'max-line-length': null,
        // Disallow end-of-line whitespace (Autofixable).
        'no-eol-whitespace': true,
        // Disallow missing end-of-source newlines (Autofixable).
        'no-missing-end-of-source-newline': true,
        // Disallow empty first lines. (Autofixable).
        'no-empty-first-line': true,
        // Require or disallow Unicode BOM.
        'unicode-bom': null,
    },
};
