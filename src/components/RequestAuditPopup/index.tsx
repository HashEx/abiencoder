import React, { useState } from 'react';
import requestAuditService from '../../services/requestAuditService';
import { pushGtagRequestAudit, pushGtagRequestAuditError } from '../../utils/gtag';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';

import Popup from '../Popup';

interface RequestAuditPopupProps {
    onClose: () => void;
}

const useForm = () => {
    const [error, setError] = useState<any>(null);
    const [form, setForm] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const onResetError = () => {
        setError(null);
    }
    const onChange = (e: any) => {
        setForm((prevState: any) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const onSubmit = async () => {
        onResetError();
        setLoading(true);
        try {
            const response = await requestAuditService.requestAudit({
                email: form.email,
                code: form.code,
                comment: form.comment,
            })
            if(response !== "ok") {
                throw new Error("Error while sending audit request. Please try again later.")
            }
            setForm({
                email: "",
                code: "",
                comment: ""
            })
            setSubmitted(true);
            pushGtagRequestAudit();
        } catch (e: any) {
            console.error(e)
            setError(e.message);
            pushGtagRequestAuditError();
        }
        setLoading(false);
    }

    return {
        form,
        loading,
        onSubmit,
        onChange,
        submitted,
        error,
        onResetError
    }
}

const RequestAuditPopup: React.FC<RequestAuditPopupProps> = ({onClose}) => {
    const { form, loading, submitted, onChange, onSubmit, error, onResetError } = useForm();
    const disabledSubmit = !form.email || !form.code;
    if(error) {
        return (
            <Popup>
                <Popup.Title>Request Audit Error</Popup.Title>
                <p>
                    {error}
                </p>
                <div className="text-center">
                    <Button onClick={onResetError} hover>
                        Back
                    </Button>
                </div>
            </Popup>
        )
    }
    if(submitted){
        return (
            <Popup onClose={onClose}>
                <Popup.Title>Your Audit Request accepted! Our manager will contact you during the day!</Popup.Title>
                <div className="text-center">
                    <Button onClick={onClose} hover>
                        OK
                    </Button>
                </div>
            </Popup>
        )
    }
    return (
        <Popup onClose={onClose}>
            <Popup.Title>Request Audit by HashEx</Popup.Title>
            <FormGroup label="Email">
                <Input onChange={onChange} value={form.value} name="email" />
            </FormGroup>
            <FormGroup label="GitHub / Source Code URL">
                <Input onChange={onChange} value={form.code} name="code" />
                <div className="form-text">For github private repos, please grant read access to user <strong>hashex-dev</strong></div>
            </FormGroup>
            <FormGroup label="Comment">
                <Input onChange={onChange} value={form.comment} name="comment" />
            </FormGroup>
            <div className="text-center">
                <Button onClick={onSubmit} disabled={disabledSubmit} loading={loading} hover>
                    Send request
                </Button>
            </div>
        </Popup>
    )
}

export default RequestAuditPopup;
