module.exports = {
  "plugins": [
    "stylelint-order"
  ],
  "rules": {

    // - Possible errors

    // -- Colors
    "color-no-invalid-hex": true,
    // -- Font family
    "font-family-no-duplicate-names": true,
    // -- Function
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    // -- String
    "string-no-newline": true,
    // -- Unit
    "unit-no-unknown": true,
    // -- Shorthand property
    "shorthand-property-no-redundant-values": true,
    // -- Property
    "property-no-unknown": true,
    // -- Keyframe declaration
    "keyframe-declaration-no-important": true,
    // -- Declaration block
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    // -- Block
    "block-no-empty": true,
    // -- Selector
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    // -- Media feature
    "media-feature-name-no-unknown": true,
    // -- At-rule
    "at-rule-no-unknown": true,
    // -- Comment
    "comment-no-empty": true,
    // -- General / Sheet
    "max-nesting-depth": 2,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,

    // - Limit language features

    // -- Color
    "color-named": "never",
    // -- Number
    "number-max-precision": 2,
    // -- Value
    "value-no-vendor-prefix": true,
    // -- Property
    "property-no-vendor-prefix": true,
    // -- Declaration
    "declaration-no-important": true,
    // -- Declaration block
    "declaration-block-single-line-max-declarations": 1,
    // -- Selector
    "selector-max-empty-lines": 0,
    "selector-max-universal": 0,
    // -- Media feature
    "media-feature-name-no-vendor-prefix": true,
    // -- At-rule
    "at-rule-no-vendor-prefix": true,

    // - Stylistic issues

    // -- Color
    "color-hex-case": "lower",
    "color-hex-length": "short",
    // -- Font family
    "font-family-name-quotes": "always-where-recommended",
    // -- Font weight
    "font-weight-notation": "named-where-possible",
    // -- Function
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    // -- Number
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    // -- String
    "string-quotes": "single",
    // -- Length
    "length-zero-no-unit": true,
    // -- Unit
    "unit-case": "lower",
    // -- Value
    "value-keyword-case": "lower",
    // -- Value list
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always",
    // -- Property
    "property-case": "lower",
    // -- Declaration
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    // -- Declaration block
    "declaration-block-semicolon-newline-after": "always",
    // -- Block
    "block-closing-brace-newline-after": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "always",
    // -- Selector
    "selector-attribute-brackets-space-inside": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-type-case": "lower",
    // -- Selector list
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    // -- Rule
    "rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    // -- Media feature
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    // -- Media query list
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    // -- At-rule
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested", "blockless-after-same-name-blockless"],
        "ignore": ["after-comment"]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-newline-after": "always",
    // -- Comment
    "comment-empty-line-before": "always",
    "comment-whitespace-inside": "always",
    // -- General / Sheet
    "indentation": 4,
    "max-empty-lines": 1,
    "max-line-length": 80,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,

    // - Stylelint order
    "order/properties-order": [
      {
        "emptyLineBefore": "always",
        "properties": [
          "position",
          "z-index",
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "display",
          "visibility",
          "float",
          "clear",
          "overflow",
          "overflow-x",
          "overflow-y",
          "-ms-overflow-x",
          "-ms-overflow-y",
          "clip",
          "zoom",
          "flex-direction",
          "flex-order",
          "flex-pack",
          "flex-align"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "box-sizing",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "table-layout",
          "empty-cells",
          "caption-side",
          "border-spacing",
          "border-collapse",
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "content",
          "quotes",
          "counter-reset",
          "counter-increment",
          "resize",
          "cursor",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left",
          "text-align",
          "text-align-last",
          "vertical-align",
          "white-space",
          "text-decoration",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-indent",
          "text-justify",
          "letter-spacing",
          "word-spacing",
          "text-outline",
          "text-transform",
          "text-wrap",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "-ms-word-wrap",
          "word-wrap",
          "word-break",
          "tab-size",
          "hyphens",
          "pointer-events"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "font",
          "font-family",
          "font-size",
          "font-weight",
          "font-style",
          "font-variant",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "line-height"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "opacity",
          "color",
          "border",
          "border-width",
          "border-style",
          "border-color",
          "border-top",
          "border-top-width",
          "border-top-style",
          "border-top-color",
          "border-right",
          "border-right-width",
          "border-right-style",
          "border-right-color",
          "border-bottom",
          "border-bottom-width",
          "border-bottom-style",
          "border-bottom-color",
          "border-left",
          "border-left-width",
          "border-left-style",
          "border-left-color",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-image",
          "border-image-source",
          "border-image-slice",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "background",
          "background-color",
          "background-image",
          "background-repeat",
          "background-attachment",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-clip",
          "background-origin",
          "background-size",
          "box-decoration-break",
          "box-shadow",
          "text-shadow"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "transition",
          "transition-delay",
          "transition-timing-function",
          "transition-duration",
          "transition-property",
          "transform",
          "transform-origin",
          "animation",
          "animation-name",
          "animation-duration",
          "animation-play-state",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction",
          "backface-visibility"
        ]
      }
    ]
  }
};
