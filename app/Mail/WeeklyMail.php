<?php

namespace App\Mail;

use App\Employee;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class WeeklyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $employee;
    public $currentWeek;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Employee $employee,  $currentWeek)
    {
        $this->employee = $employee;
        $this->currentWeek = $currentWeek;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view(
            'emails.weeklyMail',
            [
                "employee" => $this->employee,
                "currentWeek" => $this->currentWeek
            ]
        );
    }
}
