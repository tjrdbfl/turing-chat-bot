import {Pinecone} from "@pinecone-database/pinecone";

const apiKey=process.env.PINECONE_API_KEY

if(!apiKey){
    throw Error("유효한 PINECONE_API_KEY 가 아닙니다.");
}

const pinecone=new Pinecone({
    apiKey,
})

export const chatsIndex=pinecone.Index('turing-chat');