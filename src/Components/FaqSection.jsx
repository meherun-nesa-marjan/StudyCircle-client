import React from 'react';

const FaqSection = () => {
    return (
        <div>
            <div class="py-16 bg-white dark:bg-gray-900  dark:text-white">
                <div class="max-w-7xl mx-auto">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div class="space-y-4">
                        <details class="bg-gray-50 p-4 rounded-md shadow-sm dark:bg-gray-900  dark:text-white">
                            <summary class="font-semibold text-lg">What is StudyCircle?</summary>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">
                                StudyCircle is a platform that helps students manage their assignments effortlessly while providing admins the tools to monitor and review submissions.
                            </p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded-md shadow-sm dark:bg-gray-900  dark:text-white">
                            <summary class="font-semibold text-lg">How do I submit an assignment?</summary>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">
                                Log in to your account, navigate to the assignment details page, and upload your Google Docs link for submission.
                            </p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded-md shadow-sm dark:bg-gray-900  dark:text-white">
                            <summary class="font-semibold text-lg">Can I filter assignments by difficulty?</summary>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">
                                Yes, use the filter option on the Assignments page to select Easy, Medium, or Hard assignments.
                            </p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded-md shadow-sm dark:bg-gray-900  dark:text-white">
                            <summary class="font-semibold text-lg"> How do I assign tasks to students?</summary>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">
                            You can create assignments by navigating to the "Create Assignment" section, where you can specify details such as title, description, difficulty level, and deadline.
                            </p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded-md shadow-sm dark:bg-gray-900  dark:text-white">
                            <summary class="font-semibold text-lg">Can I provide feedback to students?</summary>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">
                            Yes, after evaluating an assignment, you can add marks and provide detailed feedback that will be visible to the student.
                            </p>
                        </details>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FaqSection;