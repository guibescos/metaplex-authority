import { mplTokenMetadata, updateAsUpdateAuthorityV2 } from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { publicKey } from "@metaplex-foundation/umi-public-keys";
import { createSignerFromKeypair, signerIdentity, signerPayer } from "@metaplex-foundation/umi";
import fs from 'fs';

const PATH_TO_KEYPAIR = ""; // Complete this
const NEW_AUTHORITY = publicKey("HVx4oW785bu8QDQ8AwSVfD7H4iuH51ttakc2G5f9XTX8");
const PYTH_TOKEN_MINT = publicKey("HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3");
const RPC_URL = "https://mainnet.helius-rpc.com/?api-key=e10bb1b9-db24-4649-a214-9d1dd324d7df";

async function main(){
    const umi = createUmi(RPC_URL);

    const myKeypair = umi.eddsa.createKeypairFromSecretKey(Buffer.from(JSON.parse(fs.readFileSync(PATH_TO_KEYPAIR, "utf-8"))));
    const myKeypairSigner = createSignerFromKeypair(umi, myKeypair);    

    umi.use(mplTokenMetadata());
    umi.use(signerIdentity(myKeypairSigner));
    umi.use(signerPayer(myKeypairSigner));
    updateAsUpdateAuthorityV2(umi,  {mint : PYTH_TOKEN_MINT ,newUpdateAuthority: NEW_AUTHORITY}).sendAndConfirm(umi);

}

main();
