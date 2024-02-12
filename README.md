# Solana Token Metadata Authority Transfer Script

## Installation

To get started with the Solana Token Metadata Authority Transfer Script, follow these installation steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/guibescos/metaplex-authority.git
   ```

2. Navigate to the cloned repository's directory:

   ```bash
   cd metaplex-authority
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

## Configuration

Before running the program, ensure `NEW_AUTHORITY` in `index.ts` is set to the authority who you wish to make the new update authority.

You will also need to provide the path to the current's authority keypair as `PATH_TO_KEYPAIR` in `index.ts`.

## Running the Program

To execute the program and transfer the metadata authority, use the following command:

```bash
npx ts-node src/index.ts
```