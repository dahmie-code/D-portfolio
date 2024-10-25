<?php

class PHP_Email_Form {
    public $ajax = false;
    public $to = '';
    public $from_name = '';
    public $from_email = '';
    public $subject = '';
    public $smtp = array();
    private $messages = array();

    public function add_message($content, $label, $order = 0) {
        $this->messages[] = array('content' => $content, 'label' => $label, 'order' => $order);
    }

    public function send() {
        if (!empty($this->smtp)) {
            return $this->send_smtp();
        } else {
            return $this->send_mail();
        }
    }

    private function send_mail() {
        $headers = 'From: ' . $this->from_name . ' <' . $this->from_email . '>' . "\r\n";
        $message = '';
        foreach ($this->messages as $msg) {
            $message .= $msg['label'] . ': ' . $msg['content'] . "\n";
        }

        if (mail($this->to, $this->subject, $message, $headers)) {
            return 'OK';
        } else {
            return 'Error sending email';
        }
    }

    private function send_smtp() {
        // PHPMailer integration could be added here if SMTP is needed
        // Placeholder code for SMTP functionality
        return 'SMTP functionality is not yet implemented';
    }
}

?>
