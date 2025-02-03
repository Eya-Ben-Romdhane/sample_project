<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class BookListController extends AbstractController
{
    #[Route('/book/list', name: 'app_book_list')]
    public function index(): Response
    {
        return $this->render('book_list/index.html.twig', [
            'controller_name' => 'BookListController',
        ]);
    }
}
