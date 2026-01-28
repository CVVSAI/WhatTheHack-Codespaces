# GitHub MCP Server Setup Guide

## Prerequisites
✅ GitHub repository created: `whack-a-mole-game`
✅ Code pushed to repository
✅ GitHub Issues and labels created

## Step 1: Install GitHub MCP Server

The GitHub MCP server should already be available in VS Code. Let's verify:

1. Open VS Code Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Type "MCP" to see available MCP commands
3. Look for "GitHub" in the MCP servers list

## Step 2: Configure GitHub MCP Server with OAuth

### Option A: Using VS Code Settings (Recommended)

1. Open VS Code Settings (Ctrl+, / Cmd+,)
2. Search for "MCP"
3. Find "GitHub Copilot > MCP: Servers"
4. Click "Edit in settings.json"
5. Add the GitHub MCP server configuration:

```json
{
  "github.copilot.chat.mcp.enabled": true,
  "github.copilot.chat.mcp.servers": {
    "github": {
      "command": "mcp-server-github",
      "args": [],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "use_oauth"
      }
    }
  }
}
```

### Option B: Using MCP Settings File

Create/edit `~/.config/Code/User/globalStorage/github.copilot-chat/mcpServers.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "use_oauth"
      }
    }
  }
}
```

## Step 3: Authenticate with OAuth

1. After adding the configuration, restart VS Code
2. Open Copilot Chat
3. You should see a prompt to authenticate with GitHub
4. Click "Authenticate" and follow the OAuth flow
5. Grant the necessary permissions:
   - Read repository data
   - Read/write issues
   - Read pull requests
   - Read repository metadata

## Step 4: Verify MCP Connection

In Copilot Chat, type:

```
@github list my repositories
```

or

```
#github Show me the issues in CVVSAI/whack-a-mole-game
```

You should see your repositories and issues listed.

## Step 5: Test MCP with Your Project

Try these commands in Copilot Chat:

### View Repository Issues
```
@github what issues are open in my whack-a-mole-game repository?
```

### Search for Specific Issues
```
@github show me enhancement issues in whack-a-mole-game
```

### Get Issue Details
```
@github tell me about issue #1 in whack-a-mole-game
```

### Create a New Issue
```
@github create an issue in whack-a-mole-game for adding dark mode support
```

### Check Repository Stats
```
@github show me the latest commits in whack-a-mole-game
```

## Troubleshooting

### MCP Server Not Found
- Install the GitHub MCP server: `npm install -g @modelcontextprotocol/server-github`
- Restart VS Code

### Authentication Failed
- Revoke old tokens at https://github.com/settings/tokens
- Re-authenticate using the OAuth flow
- Check that you granted all required permissions

### No Data Returned
- Verify repository name is correct: `CVVSAI/whack-a-mole-game`
- Check that issues were created successfully
- Ensure you have access to the repository

## Success Criteria Checklist

- [ ] GitHub repository created and code pushed
- [ ] Multiple issues created with labels
- [ ] MCP server configured
- [ ] OAuth authentication completed
- [ ] Copilot Chat can access GitHub data
- [ ] Successfully queried issues using MCP
- [ ] Demonstrated MCP commands in Copilot Chat

## Useful MCP Commands

Once MCP is connected, you can:
- Query issues and pull requests
- Search repository code
- Get file contents
- Check commit history
- Create new issues
- Update issue labels
- Comment on issues

## Next Steps

After MCP is working, try:
1. Ask Copilot to suggest solutions for specific issues
2. Use MCP to implement features from your issue tracker
3. Let Copilot reference issue context when writing code
4. Automate issue updates based on code changes
