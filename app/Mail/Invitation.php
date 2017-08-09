<?php

namespace App\Mail;

use App\Employee;
use App\EmployeeActivation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Invitation extends Mailable
{
    use Queueable, SerializesModels;

    public $manager;
    public $employee;
    public $activation;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Employee $manager, Employee $employee, EmployeeActivation $activation)
    {
        $this->manager = $manager;
        $this->employee = $employee;
        $this->activation = $activation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view(
            'emails.invite',
            [
                "manager" => $this->manager,
                "employee" => $this->employee,
                "token" => $this->activation->token
            ]
        );
    }
}
