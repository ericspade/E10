import axiosInstance from "axios";

const apiSettings = {

createListing: async (data) => {
    let form_data = new FormData();
    if (data.attach)
        form_data.append("attach", data.attach, data.attach.name);
    form_data.append("client_name", data.client_name);
    form_data.append("company", data.company);
    form_data.append("phone", data.phone);
    form_data.append("email", data.email);
    form_data.append("service", data.service);
    form_data.append("country", data.country);
    form_data.append("comments", data.comments);

const myNewModel = await axiosInstance
        .post("/api/feedback/", form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error.response;
        });
    return myNewModel;
    },
};

export default apiSettings;