import 'package:flutter/material.dart';

class Device {
  final String id;
  final String name;
  final IconData icon;
  bool isOn;
  final String type;

  Device({
    required this.id,
    required this.name,
    required this.icon,
    this.isOn = false,
    required this.type,
  });
}
