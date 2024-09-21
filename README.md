# backend
This is the backend of JobGenie

# Eslint Configuration | Exp[laination of addition : 

# Key Changes and Explanations:

Language Options:
Parser: The @typescript-eslint/parser is explicitly set to handle TypeScript files.

Parser Options: tsconfigRootDir and project are configured to reference the TypeScript configuration (tsconfig.json).

Plugins:
The required plugins are imported at the top of the file (@typescript-eslint, prettier, promise, and typescript-sort-keys).

Rules:
Prettier: The prettier/prettier rule ensures that Prettier formatting issues are treated as errors.

TypeScript: Key rules from the TypeScript plugin such as @typescript-eslint/naming-convention and @typescript-eslint/no-explicit-any are carried over.

Custom Rules: Custom rules like no-console and sort-keys are retained.

File Targets and Ignores:

The configuration applies to .ts, .tsx, and .js files, and the .eslintrc.js file is ignored.
