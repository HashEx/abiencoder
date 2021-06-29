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
        const formData = new FormData();
        formData.append("act", "request");
        formData.append("email", data.email);
        formData.append("code", data.code);
        formData.append("comment", data.comment);
        const response = await axios.post(this.baseURL, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response.data;
    }
}


export default new RequestAuditService();