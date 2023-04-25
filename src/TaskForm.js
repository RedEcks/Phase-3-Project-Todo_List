import { useRef } from 'react';
import handleCreate from './Create'

const TaskForm = () => {
    const taskForm = useRef(null)
    const createCategory = () => handleCreate(taskForm.current['category'].value);

    return (
        <div>
            <form ref={taskForm}>
                <input label={'Category'} name={'category'}/>
            </form>
            <button onClick={createCategory}>Create Category</button>
        </div>
    );
};

export default TaskForm;