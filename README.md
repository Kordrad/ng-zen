# NgZen

## Overview

**ng-zen** is a comprehensive Angular development accelerator featuring:

- Ready-to-use UI-kit components
- Angular schematics integration
- CLI tool for streamlined component generation

## Repository Structure

The repository contains:

- `/packages/cli`: Core CLI implementation with Angular schematics
- Configuration files for publishing and local development

## Local development

1. **[Set up Verdaccio](https://verdaccio.org/docs/installation#installing-the-cli)**
2. **Start local registry**

```bash
verdaccio
```

3. **Configure npm to use local registry (follow Verdaccio CLI prompts)**
4. **Publish locally**

```bash
pnpm run publish:local
```

5. **Test in Angular project**

```bash
ng add @ng-zen/cli --registry http://localhost:4873/
```

## Author & Maintenance

**Core Maintainer**: Konrad Stępień

- 📧 [kord.stp@gmail.com](mailto:kord.stp@gmail.com)
- 💼 [LinkedIn Profile](https://www.linkedin.com/in/konradstepien/)

## License

BSD 2-Clause License - [View Full License](LICENSE)

## Contribution

To contribute:

1. Fork the repository
2. Create feature branch
3. Submit PR with detailed description
4. Ensure code follows project standards
