import 'package:flutter/material.dart';
import '../models/product.dart';

class ProductProvider extends ChangeNotifier {
  final List<Product> _products = [
    Product(
      id: '1',
      name: 'Smart Bulb',
      brand: 'Philips',
      price: 29.99,
      imageUrl: '',
      category: 'Lighting',
    ),
    Product(
      id: '2',
      name: 'Smart Plug',
      brand: 'TP-Link',
      price: 19.99,
      imageUrl: '',
      category: 'Accessories',
    ),
    Product(
      id: '3',
      name: 'Security Camera',
      brand: 'Ring',
      price: 99.99,
      imageUrl: '',
      category: 'Security',
    ),
    Product(
      id: '4',
      name: 'Door Lock',
      brand: 'August',
      price: 149.99,
      imageUrl: '',
      category: 'Security',
    ),
  ];

  List<Product> get products => _products;
}
