# Branching Strategy & Naming Conventions

## Overview

This document outlines our Git branching strategy and naming conventions to ensure consistent and maintainable code development across the team.

## Branch Structure

### Main Branches

- **`main`** - Production-ready code, always deployable
- **`develop`** - Integration branch for features, latest delivered development changes

### Supporting Branches

- **`feature/*`** - New features being developed
- **`bugfix/*`** - Bug fixes for the upcoming release
- **`hotfix/*`** - Critical fixes for production
- **`release/*`** - Preparation for a new production release
- **`style/*`** - Code style and formatting changes
- **`refactor/*`** - Code refactoring without changing functionality
- **`docs/*`** - Documentation updates
- **`test/*`** - Adding or updating tests
- **`chore/*`** - Maintenance tasks, dependencies, etc.

## Branch Naming Conventions

### Format
```
<type>/<ticket-number>-<description>
```

### Examples
```
feature/CTRL-123-add-chat-functionality
bugfix/CTRL-456-fix-message-sending-error
style/CTRL-789-update-button-styles
refactor/CTRL-101-optimize-api-calls
docs/CTRL-202-update-readme
test/CTRL-303-add-unit-tests
chore/CTRL-404-update-dependencies
```

### Type Prefixes

| Prefix | Description | Example |
|--------|-------------|---------|
| `feature/` | New features | `feature/CTRL-123-add-user-authentication` |
| `bugfix/` | Bug fixes | `bugfix/CTRL-456-fix-login-validation` |
| `hotfix/` | Critical production fixes | `hotfix/CTRL-789-fix-security-vulnerability` |
| `style/` | Code style changes | `style/CTRL-101-format-code-with-prettier` |
| `refactor/` | Code refactoring | `refactor/CTRL-202-optimize-database-queries` |
| `docs/` | Documentation updates | `docs/CTRL-303-update-api-documentation` |
| `test/` | Test additions/updates | `test/CTRL-404-add-integration-tests` |
| `chore/` | Maintenance tasks | `chore/CTRL-505-update-npm-packages` |
| `release/` | Release preparation | `release/v1.2.0` |

## Workflow Guidelines

### Starting a New Feature

1. **Create feature branch from `develop`:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/CTRL-123-feature-description
   ```

2. **Develop and commit regularly:**
   ```bash
   git add .
   git commit -m "feat: add user authentication module"
   ```

3. **Push to remote:**
   ```bash
   git push -u origin feature/CTRL-123-feature-description
   ```

### Completing a Feature

1. **Update your feature branch with latest develop:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/CTRL-123-feature-description
   git merge develop
   ```

2. **Create a Pull Request:**
   - Target: `develop`
   - Source: `feature/CTRL-123-feature-description`
   - Include proper description and link to ticket

3. **After approval and merge:**
   ```bash
   git checkout develop
   git pull origin develop
   git branch -d feature/CTRL-123-feature-description
   ```

### Bug Fixes

1. **Create bugfix branch from `develop`:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b bugfix/CTRL-456-bug-description
   ```

2. **Follow same workflow as features**

### Hotfixes (Production Issues)

1. **Create hotfix branch from `main`:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/CTRL-789-critical-fix
   ```

2. **Fix the issue and commit:**
   ```bash
   git add .
   git commit -m "fix: resolve critical security vulnerability"
   ```

3. **Create Pull Requests:**
   - One targeting `main` (for immediate deployment)
   - One targeting `develop` (to include in next release)

## Commit Message Conventions

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(auth): add OAuth2 authentication

- Implement Google OAuth2 provider
- Add JWT token handling
- Update user model

Closes CTRL-123

fix(api): resolve user data fetching issue

The API was returning null for user preferences due to incorrect
database query. This fix ensures proper data retrieval.

BREAKING CHANGE: User API response structure has changed
```

## Pull Request Guidelines

### Required Information
- **Title:** Clear, descriptive title
- **Description:** Detailed explanation of changes
- **Ticket Link:** Reference to related issue/ticket
- **Type:** Feature, Bugfix, Hotfix, etc.
- **Breaking Changes:** If any, clearly document them

### Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issue
Closes #[issue-number]

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Code is commented where necessary
- [ ] Documentation is updated
```

## Code Review Process

### Reviewers
- Minimum 1 reviewer required for all PRs
- 2 reviewers for critical changes (security, performance, etc.)

### Review Criteria
- Code quality and standards
- Functionality and logic
- Test coverage
- Documentation updates
- Performance implications
- Security considerations

## Release Process

### Creating a Release

1. **Create release branch from `develop`:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.2.0
   ```

2. **Finalize release:**
   - Update version numbers
   - Update changelog
   - Final testing

3. **Merge to main and develop:**
   ```bash
   git checkout main
   git merge release/v1.2.0
   git tag -a v1.2.0 -m "Release version 1.2.0"
   git push origin main --tags
   
   git checkout develop
   git merge release/v1.2.0
   git push origin develop
   ```

4. **Delete release branch:**
   ```bash
   git branch -d release/v1.2.0
   ```

## Best Practices

### Do's
- ✅ Always pull latest changes before creating new branches
- ✅ Use descriptive branch names
- ✅ Keep commits atomic and focused
- ✅ Write clear commit messages
- ✅ Update documentation when needed
- ✅ Test your changes thoroughly
- ✅ Review your own code before requesting review

### Don'ts
- ❌ Don't commit directly to `main` or `develop`
- ❌ Don't use vague branch names
- ❌ Don't commit large, unrelated changes together
- ❌ Don't ignore code review feedback
- ❌ Don't merge without proper testing
- ❌ Don't forget to update documentation

## Tools and Automation

### Recommended Tools
- **Git Hooks:** Pre-commit hooks for linting and formatting
- **CI/CD:** Automated testing and deployment
- **Code Quality:** ESLint, Prettier, TypeScript strict mode
- **Branch Protection:** Require PR reviews and status checks

### Branch Protection Rules
- Require pull request reviews
- Require status checks to pass
- Require branches to be up to date
- Restrict direct pushes to `main` and `develop`

## Troubleshooting

### Common Issues

**Merge Conflicts:**
```bash
git status  # Check conflicted files
# Resolve conflicts manually
git add .
git commit -m "resolve merge conflicts"
```

**Rebasing:**
```bash
git rebase develop  # Rebase feature branch on develop
# Resolve conflicts if any
git push --force-with-lease  # Push rebased branch
```

**Undoing Commits:**
```bash
git reset --soft HEAD~1  # Undo last commit, keep changes
git reset --hard HEAD~1  # Undo last commit, discard changes
```