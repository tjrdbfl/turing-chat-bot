import { getEmbedding } from "@/app/api/pinecone/route";

export async function getEmbeddingForNote(
    title:string,content:string|undefined
){
    return getEmbedding(title+"\n\n"+content?? "");
}