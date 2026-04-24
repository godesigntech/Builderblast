# Security Specification - BuilderBlast.ai

## Data Invariants
1. A Task must belong to an existing Phase (1-12).
2. A User's `role` can only be set by an Admin or established during initial creation (defaulting to 'agent').
3. A Policy must be linked to a valid Client and Agent.
4. Agents can only read/write their own Tasks and Policies.
5. Builders can read Tasks and Policies of agents in their team (`builderId == builderUid`).
6. Licensing Team can read/write `licensing` collection for any agent.

## The Dirty Dozen (Attack Payloads)

1. **Identity Spoofing**: Attempt to create a user profile with `uid` of another user.
2. **Privilege Escalation**: An 'agent' attempting to update their own `role` to 'builder' or 'licensing_team'.
3. **Ghost Field Injection**: Adding `isVerified: true` to a user document in a standard update.
4. **Orphaned Task**: Creating a task with a non-existent `agentId`.
5. **Phase Skip**: Attempting to move `currentPhase` from 1 to 12 directly.
6. **Unauthorized Read**: Agent A attempting to list Policies of Agent B.
7. **Builder Leak**: Builder A attempting to read/write Agent B (who belongs to Builder B).
8. **Malicious ID**: Creating a document with a 1MB string as the ID.
9. **Timestamp Manipulation**: Providing a future `createdAt` date from the client.
10. **Data Poisoning**: Setting `points` in a Policy to a negative number or a string.
11. **PII Scraping**: Trying to list all users' email and phone numbers without being an admin.
12. **Terminal State Break**: Attempting to change a Policy status from 'Delivered' back to 'Submitted'.

## Test Plan (firestore.rules.test.ts)
- Verify `auth != null` for all operations.
- Verify `isValidId()` for all document IDs.
- Verify `isValidUser()` enforces role immutability.
- Verify `isValidTask()` enforces phase boundaries.
- Verify `isValidPolicy()` enforces numeric points.
- Verify relational access: Agent -> Own Data, Builder -> Team Data, Licensing -> All Pipeline.
