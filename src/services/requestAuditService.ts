import axios from 'axios';

interface RequestAuditData {
    email: string;
    code: string;
    comment?: string;
}

class RequestAuditService {
    baseURL = "https://hashex.org/send.php";

    requestAudit = async (data: RequestAuditData) => {
        data.comment = ["[ABIENCODER]", data.comment].filter(Boolean).join(" "); 
        const response = await axios.post(this.baseURL, data);

        return response.data;
    }
}


export default new RequestAuditService();