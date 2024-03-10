import {Client, ID, Databases, Storage, Query} from 'appwrite'
import config from '../config/config.js'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}) {
        console.log("createPost started")
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectiontId,slug,{title,content,featuredImage,status,userId});
        } catch (error) {
            console.log("Error: during create post --> ",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectiontId,slug,{title,content,featuredImage,status})
        } catch (error) {
            console.log("Error: during update post --> ",error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectiontId,slug)
            return true
        } catch (error) {
            console.log("Error: during delete post --> ",error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectiontId,slug)
        } catch (error) {
            console.log("Error: during get post --> ",error)

        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        console.log('getPosts is called')
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectiontId,queries)
        } catch (error) {
            console.log("Error: during get all posts --> ",error)
            return false;
        }
    }

    //File upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Error: during uploadFile --> ",error)
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId,fileId)
        } catch (error) {
            console.log("Error: during deleteFile --> ",error)
            return false;
        }
    }

    previewFile(fileId) {
       return this.bucket.getFilePreview(config.appwriteBucketId,fileId);
    }
}

export const service = new Service();
export default service;